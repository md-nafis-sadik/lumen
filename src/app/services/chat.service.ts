// chat.service.ts
import { Injectable } from '@angular/core';
import { chat } from '../shared/components/chats/data';
import { ChatMessage } from '../models/chat.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  getChatHistory(): ChatMessage[] {
    return chat.map(msg => this.mapChatMessage(msg));
  }

  private mapChatMessage(msg: any): ChatMessage {
    return {
      id: msg.id,
      sender: msg.sender === 'right' ? 'user' : 'bot',
      content: msg.message || '',
      type: this.getMessageType(msg),
      timestamp: this.parseTimeString(msg.time),
      avatar: msg.isdataSender ? 'assets/icons/Avatar.png' : 'assets/icons/LUMEN.svg',
      images: msg.images,
      file: msg.file
    };
  }

  private getMessageType(msg: any): 'text' | 'image' | 'file' | 'booking' {
    if (msg.isImage) return 'image';
    if (msg.isFile) return 'file';
    return 'text';
  }

  private parseTimeString(timeString: string): Date {
    const [time, period] = timeString.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    const date = new Date();
    date.setHours(period === 'pm' ? hours + 12 : hours);
    date.setMinutes(minutes);
    return date;
  }

  private currentChatSubject = new BehaviorSubject<{id: string, avatar: string} | null>(null);
  
  // Observable for components to subscribe to
  currentChat$ = this.currentChatSubject.asObservable();

  setCurrentChatUser(userId: string, avatar: string) {
    this.currentChatSubject.next({ id: userId, avatar });
  }

  getCurrentChatAvatar(): string {
    return this.currentChatSubject.value?.avatar || 'assets/icons/default-avatar.svg';
  }

}