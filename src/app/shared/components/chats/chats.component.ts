// chat-messages.component.ts
import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { DateFormatterPipe } from '../../pipes/date-formatter.pipe';
import { TimeAgoPipe } from '../../pipes/time-ago.pipe';
import { CommonModule } from '@angular/common';
import { PickleballBookingCardComponent } from '../pickleball-booking-card/pickleball-booking-card.component';
import { FormsModule } from '@angular/forms';
import { ChatMessage } from '../../../models/chat.model';

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [CommonModule, DateFormatterPipe, FormsModule, TimeAgoPipe, PickleballBookingCardComponent],
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements AfterViewChecked {
  @Input() messages: any[] = [];
  @Input() showSlider = true;
  @Output() messageSent = new EventEmitter<string>();
  
  userInput = '';
  previousMessagesLength = 0;
  shouldAutoScroll = true;
  
  @ViewChild('chatContainer') private chatContainer!: ElementRef;

  ngAfterViewChecked() {
    if (this.messages.length > this.previousMessagesLength) {
      setTimeout(() => this.scrollToBottom(), 50);
      this.previousMessagesLength = this.messages.length;
    }
  }

  private scrollToBottom() {
    try {
      this.chatContainer.nativeElement.scrollTop = 
        this.chatContainer.nativeElement.scrollHeight;
    } catch (err) { 
      console.error('Scroll error:', err); 
    }
  }

  onScroll() {
    const element = this.chatContainer.nativeElement;
    const atBottom = element.scrollHeight - element.scrollTop <= element.clientHeight + 50;
    this.shouldAutoScroll = atBottom;
  }

  sendMessage() {
    const trimmed = this.userInput.trim();
    if (!trimmed) return;
    this.messageSent.emit(trimmed);
    this.userInput = '';
  }

  sendQuickMessage(message: string) {
    this.messageSent.emit(message);
  }

  get groupedMessages() {
    if (!this.messages || !Array.isArray(this.messages)) return [];
    const grouped: any[] = [];
    let lastDateKey = '';
    
    for (const msg of this.messages) {
      if (!msg || !msg.timestamp) continue;
      const dateKey = new Date(msg.timestamp).toDateString();
      
      if (dateKey !== lastDateKey) {
        grouped.push({ type: 'date', date: msg.timestamp });
        lastDateKey = dateKey;
      }
      grouped.push({ type: 'message', data: msg });
    }
    return grouped;
  }

  trackById(index: number, item: any): any {
    return item.id || index;
  }

  mapDataToMessages(chatData: any[]): ChatMessage[] {
    return chatData.map(msg => ({
      id: msg.id,
      sender: msg.sender === 'right' ? 'user' : 'bot',
      content: msg.message,
      timestamp: this.parseTimeString(msg.time),
      type: this.getMessageType(msg),
      images: msg.images,
      file: msg.file,
      avatar: msg.isdataSender ? 'assets/icons/Avatar.png' : 'assets/icons/LUMEN.svg'
    }));
  }

  private getMessageType(msg: any): 'text' | 'image' | 'file' | 'booking' {
    if (msg.isImage) return 'image';
    if (msg.isFile) return 'file';
    return 'text'; // Default to text
  }

  private parseTimeString(timeString: string): Date {
    const [time, period] = timeString.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    const date = new Date();
    date.setHours(period === 'pm' ? hours + 12 : hours);
    date.setMinutes(minutes);
    return date;
  }
}