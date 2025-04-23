import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewChecked, SimpleChanges, Inject, PLATFORM_ID } from '@angular/core';
import { DateFormatterPipe } from '../../pipes/date-formatter.pipe';
import { TimeAgoPipe } from '../../pipes/time-ago.pipe';
import { CommonModule } from '@angular/common';
import { PickleballBookingCardComponent } from '../pickleball-booking-card/pickleball-booking-card.component';
import { FormsModule } from '@angular/forms';
import { ChatMessage } from '../../../models/chat.model';
import { chat, channel_chat } from './data';
import { ActivatedRoute } from '@angular/router';
import { ChatSelectionService } from '../../../services/chat-selection.service';
import { combineLatest } from 'rxjs';
import { ChatStoreService } from '../../../services/chat-store.service';

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
  selectedChatId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatSelectionService,
     @Inject(PLATFORM_ID) private platformId: Object,
        private chatStore: ChatStoreService,
  
  ) { 

    this.chatService.selectedChatId$.subscribe(chatId => {
      this.selectedChatId = chatId;
    });
  }


  ngOnInit() {
    combineLatest([
      this.route.queryParams,
      this.chatService.selectedChatId$
    ]).subscribe(([params, serviceChatId]) => {
      const chatId = serviceChatId || params['chatId'];
      this.chatId = chatId;
      this.loadChatData();

    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['chatId'] || changes['messages']) {
      this.loadChatData();

    }
  }

  private loadChatData() {

    if (!this.chatId) {
      // Create new array reference to trigger change detection
      this.chatData = [...this.messages];
      return;
    }
    this.showSlider = false;

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
    const threshold = 0; // Pixels from bottom
    const position = element.scrollTop + element.clientHeight;
    this.shouldAutoScroll = position > element.scrollHeight - threshold;
  }


  sendMessage() {
    const trimmed = this.userInput.trim();
    if (!trimmed) return;

    // const newMessage: ChatMessage = {
    //   id: Date.now().toString(),
    //   sender: 'user',
    //   content: [trimmed],
    //   timestamp: new Date(),
    //   type: 'text',
    //   avatar: 'assets/icons/Avatar.png'
    // };

    // this.chatData.push(newMessage);
    // this.messageSent.emit(trimmed);
    // this.userInput = '';
    // this.showSlider = false;

    const currentChat = this.chatStore.getChat(this.selectedChatId);
    const newMessages = [
      ...currentChat,
      {
        id: Date.now().toString(),
        sender: 'user' as const,
        content: [this.userInput],
        type: 'text' as const,
        timestamp: new Date(),
        avatar: 'assets/icons/Avatar.png'
      }
    ];

    this.chatStore.updateChat(this.selectedChatId, newMessages);
    this.userInput = '';
    this.showSlider = false;

    setTimeout(() => {
      // Bot message with proper typing
      const newMessage: ChatMessage = {
          id: Date.now().toString(),
          sender: 'user' as const,
          content: [trimmed],
          type: 'text' as const,
          timestamp: new Date(),
          avatar: 'assets/icons/Avatar.png'
        };

      this.chatData = [...this.chatData, newMessage];
  
    }, 50);

    setTimeout(() => {
      // Bot message with proper typing

      const newMessage: ChatMessage = trimmed.toLowerCase().includes('book') &&
        trimmed.toLowerCase().includes('pickleball')
        ? {
          id: Date.now().toString(),
          sender: 'bot',
          content: [''],
          type: 'booking',
          timestamp: new Date(),
          avatar: 'assets/icons/LUMEN.svg'
        }
        : {
          id: Date.now().toString(),
          sender: 'bot',
          content: ["I'm here to help!"],
          type: 'text',
          timestamp: new Date(),
          avatar: 'assets/icons/LUMEN.svg'
        };

      this.chatData = [...this.chatData, newMessage];
  
    }, 300);
    
  }

  sendQuickMessage(message: string) {
    this.messageSent.emit(message);
    this.showSlider = false;
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

  setChatUser(id: string) {
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
          content: msg.images && msg.images.length > 0 ? msg.images : [msg.message],
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
        sender: msg?.sender === 'right' || msg?.isSender ? 'user' : 'bot',
        content: msg?.message || msg?.msg,
        type: 'text',
        timestamp: this.parseTimeString(msg.time),
        avatar: msg.isDataSender ? 'assets/icons/Avatar.png' : this.currentChatAvatar
      };
    });
  }

  getContentParts(msg: any): string[] {
  const parts: string[] = [];
  let i = 1;

  while (true) {
    const val = msg[`message${i === 1 ? '' : i}`] || msg[`msg${i === 1 ? '' : i}`];
    if (val) parts.push(val);
    else break;
    i++;
  }

  return parts;
}



  // getMessageType method remains the same
  private getMessageType(msg: any): 'text' | 'image' | 'file' | 'booking' {
    if (msg.bookingDetails) return 'booking';
    if (msg.images?.length) return 'image';
    if (msg.file) return 'file';
    return 'text';
  }

  handleFileUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
  
    const reader = new FileReader();
    const fileType = this.getFileType(file);
  
    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (!e.target?.result) return;
  
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        sender: 'user',
        content: [e.target.result as string],
        timestamp: new Date(),
        type: fileType,
        avatar: 'assets/icons/Avatar.png'
      };
  
      if (fileType === 'file') {
        newMessage.file = {
          name: file.name,
          size: this.formatFileSize(file.size),
          url: e.target.result as string
        };
      } else if (fileType === 'image') {
        newMessage.images = [e.target.result as string];
      }
  
      this.chatData.push(newMessage);
      this.previousMessagesLength = this.chatData.length;
      input.value = ''; // Reset input
      this.showSlider = false;
    };
  
    reader.readAsDataURL(file);
  }

  private getFileType(file: File): 'image' | 'file' {
    const imageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
    return imageTypes.includes(file.type) ? 'image' : 'file';
  }

  private formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  private parseTimeString(timeString: string | undefined): Date {
    const now = new Date();
    
    if (!timeString) return now;
  
    // Handle full ISO strings
    if (timeString.includes('T')) {
      const date = new Date(timeString);
      return isNaN(date.getTime()) ? now : date;
    }
  
    // Handle time strings like "2:30 pm"
    const timeRegex = /(\d{1,2}):(\d{2})\s*(am|pm)?/i;
    const match = timeString.match(timeRegex);
  
    if (match) {
      let hours = parseInt(match[1]);
      const minutes = parseInt(match[2]);
      const period = match[3]?.toLowerCase();
  
      // Convert 12-hour format to 24-hour
      if (period === 'pm' && hours < 12) hours += 12;
      if (period === 'am' && hours === 12) hours = 0;
  
      // Create date with today's date but specified time
      const date = new Date();
      date.setHours(hours, minutes, 0, 0);
      return date;
    }
  
    console.warn('Invalid time string format:', timeString);
    return now;
  }

  stringToTime(timeStr: string): Date {
    const today = new Date();
    const [time, modifier] = timeStr.split(' ');
    let [hours, minutes] = time.split(':').map(Number);

    if (modifier.toLowerCase() === 'pm' && hours < 12) {
      hours += 12;
    } else if (modifier.toLowerCase() === 'am' && hours === 12) {
      hours = 0;
    }

    const result = new Date(today);
    result.setHours(hours, minutes, 0, 0);
    return result;
  }


}