// chat-store.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChatMessage } from '../models/chat.model';

// chat-store.service.ts
@Injectable({ providedIn: 'root' })
export class ChatStoreService {
  private chats = new Map<string, BehaviorSubject<ChatMessage[]>>();
  private mainChat = new BehaviorSubject<ChatMessage[]>([]);

  // Get observable stream
  getChat$(chatId: string | null): Observable<ChatMessage[]> {
    if (!chatId) return this.mainChat.asObservable();
    if (!this.chats.has(chatId)) {
      this.chats.set(chatId, new BehaviorSubject<ChatMessage[]>([]));
    }
    return this.chats.get(chatId)!.asObservable();
  }

  // Get current value synchronously
  getChat(chatId: string | null): ChatMessage[] {
    if (!chatId) return this.mainChat.value;
    return this.chats.get(chatId)?.value || [];
  }

  updateChat(chatId: string | null, messages: ChatMessage[]) {
    if (chatId) {
      this.chats.get(chatId)?.next(messages);
    } else {
      this.mainChat.next(messages);
    }
  }
}