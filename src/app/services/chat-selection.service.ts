// chat.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatSelectionService {
  private selectedChatIdSubject = new BehaviorSubject<string | null>(null);
  selectedChatId$ = this.selectedChatIdSubject.asObservable();

  setSelectedChatId(chatId: string | null) {
    this.selectedChatIdSubject.next(chatId);
  }
}
