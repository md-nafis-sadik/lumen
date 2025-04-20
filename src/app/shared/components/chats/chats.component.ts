import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewChecked, SimpleChanges } from '@angular/core';
import { DateFormatterPipe } from '../../pipes/date-formatter.pipe';
import { TimeAgoPipe } from '../../pipes/time-ago.pipe';
import { CommonModule } from '@angular/common';
import { PickleballBookingCardComponent } from '../pickleball-booking-card/pickleball-booking-card.component';
import { FormsModule } from '@angular/forms';
import { ChatMessage } from '../../../models/chat.model';
import { chat, channel_chat } from './data';
import { ActivatedRoute } from '@angular/router';

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
  @Input() chatId: string | null = null;
  
  @Output() messageSent = new EventEmitter<string>();
    
  @ViewChild('chatContainer') private chatContainer!: ElementRef;
  
  userInput = '';
  previousMessagesLength = 0;
  shouldAutoScroll = true;
  currentChatAvatar = 'assets/icons/default-avatar.svg';
  chatData: ChatMessage[] = [];


  constructor(private route: ActivatedRoute) {}

  
  ngOnInit() {

    
    this.route.queryParams.subscribe(params => {
      const chatId = params['chatId'];
      if (chatId) {
        this.chatId = chatId;
        this.loadChatData(); 
      }else{
        this.chatId = null
        this.chatData=[]
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['chatId']) {
      this.loadChatData();
      this.showSlider = !this.chatId; // Hide slider when chat is selected
    }
  }

  private loadChatData() {

    if (!this.chatId) {
      this.chatData = [];
      return;
    }

    const chatMap: { [key: string]: any } = {
      'contact-id-1': { 
        messages: chat, 
        avatar: 'assets/images/users/avatar-2.jpg' 
      },
      'contact-id-12': { 
        messages: channel_chat, 
        avatar: 'assets/images/users/avatar-10.jpg'
      },
    };

    const selectedChat = chatMap[this.chatId];
    if (selectedChat) {
      this.currentChatAvatar = selectedChat.avatar;
      this.chatData = this.mapDataToMessages(selectedChat.messages);
    }
  }

// Update ngAfterViewChecked
ngAfterViewChecked() {
    if (this.chatData.length > this.previousMessagesLength) {
    setTimeout(() => this.scrollToBottom(), 50);
    this.previousMessagesLength = this.chatData.length;
  }
}

// Modify the scrollToBottom method
private scrollToBottom() {
  try {
    const element = this.chatContainer.nativeElement;
    element.scrollTop = element.scrollHeight;
  } catch (err) {
    console.error('Scroll error:', err);
  }
}
// Update onScroll method
onScroll() {
  const element = this.chatContainer.nativeElement;
  const threshold = 150; // Pixels from bottom
  const position = element.scrollTop + element.clientHeight;
  this.shouldAutoScroll = position > element.scrollHeight - threshold;
}
  

 

  sendMessage() {
  const trimmed = this.userInput.trim();
  if (!trimmed) return;

  const newMessage: ChatMessage = {
    id: Date.now().toString(),
    sender: 'user',
    content: trimmed,
    timestamp: new Date(),
    type: 'text',
    avatar: 'assets/icons/Avatar.png'
  };

  this.chatData.push(newMessage);
  this.messageSent.emit(trimmed);
  this.userInput = '';
}

  sendQuickMessage(message: string) {
    this.messageSent.emit(message);
  }

  // In ChatsComponent class
get groupedMessages() {
  if (!this.chatData || !Array.isArray(this.chatData)) return []; // Changed from messages to chatData
  const grouped: any[] = [];
  let lastDateKey = '';
  
  for (const msg of this.chatData) { // Changed from messages to chatData
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

  setChatUser(id:string){
    this.chatId = id
    this.loadChatData()
  }

  trackById(index: number, item: any): any {
    return item.id || index;
  }
  private mapDataToMessages(chatData: any[]): ChatMessage[] {
    return chatData.map(msg => {
      const messageType = this.getMessageType(msg);  // Use the getMessageType method
  
      // Handle image messages
      if (messageType === 'image') {
        return {
          id: msg.id,
          sender: msg.sender === 'right' ? 'user' : 'bot',
          content: msg.images?.[0] || msg.message,
          type: 'image',
          timestamp: this.parseTimeString(msg.time),
          avatar: msg.isDataSender ? 'assets/icons/Avatar.png' : this.currentChatAvatar
        };
      }
  
      // Handle file messages
      if (messageType === 'file') {
        return {
          id: msg.id,
          sender: msg.sender === 'right' ? 'user' : 'bot',
          content: msg.file?.url || msg.message,
          fileName: msg.file?.name || 'document.pdf',
          fileSize: msg.file?.size || 'N/A',
          type: 'file',
          timestamp: this.parseTimeString(msg.time),
          avatar: msg.isDataSender ? 'assets/icons/Avatar.png' : this.currentChatAvatar
        };
      }
  
      // Handle booking messages
      if (messageType === 'booking') {
        return {
          id: msg.id,
          sender: msg.sender === 'right' ? 'user' : 'bot',
          content: msg.bookingDetails,
          type: 'booking',
          timestamp: this.parseTimeString(msg.time),
          avatar: msg.isDataSender ? 'assets/icons/Avatar.png' : this.currentChatAvatar
        };
      }
  
      // Default text message
      return {
        id: msg.id,
        sender: msg.sender === 'right' ? 'user' : 'bot',
        content: msg.message,
        type: 'text',
        timestamp: this.parseTimeString(msg.time),
        avatar: msg.isDataSender ? 'assets/icons/Avatar.png' : this.currentChatAvatar
      };
    });
  }
  
  // getMessageType method remains the same
  private getMessageType(msg: any): 'text' | 'image' | 'file' | 'booking' {
    if (msg.bookingDetails) return 'booking';
    if (msg.images?.length) return 'image';
    if (msg.file) return 'file';
    return 'text';
  }
  
handleFileUpload(event: any, type: 'image' | 'file') {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  
  reader.onload = (e: any) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      content: e.target.result,
      timestamp: new Date(),
      type: type,
      avatar: 'assets/icons/Avatar.png'
    };

    this.chatData.push(newMessage);
    this.messageSent.emit(type === 'image' ? '[Image]' : '[File]');
    this.previousMessagesLength = this.chatData.length;
  };

  if (type === 'image') {
    reader.readAsDataURL(file);
  } else {
    reader.readAsText(file);
  }
}


  private parseTimeString(timeString: string | undefined): Date {
    const date = new Date();
  
    if (!timeString || typeof timeString !== 'string' || !timeString.includes(':')) {
      return date; // fallback to current time
    }
  
    try {
      const [time, period] = timeString.split(' ');
      const [hours, minutes] = time.split(':').map(Number);
  
      let parsedHours = period === 'pm' && hours < 12 ? hours + 12 : hours;
      if (period === 'am' && hours === 12) parsedHours = 0;
  
      date.setHours(parsedHours);
      date.setMinutes(minutes || 0);
    } catch (err) {
      console.warn('Invalid time string:', timeString, err);
    }
  
    return date;
  }
  
}