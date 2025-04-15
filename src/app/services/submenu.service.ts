import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubmenuService {
  private showAddChannelModalSource = new BehaviorSubject<boolean>(false);
  private newChannelNameSource = new BehaviorSubject<string>('');

  showAddChannelModal$ = this.showAddChannelModalSource.asObservable();
  newChannelName$ = this.newChannelNameSource.asObservable();

  openAddChannelModal() {
    this.showAddChannelModalSource.next(true);
  }

  closeAddChannelModal() {
    this.showAddChannelModalSource.next(false);
    this.newChannelNameSource.next('');
  }

  setNewChannelName(name: string) {
    this.newChannelNameSource.next(name);
  }

  addChannel(channels: string[], name: string) {
    if (name.trim()) {
      channels.push(name.trim());
    }
  }
}