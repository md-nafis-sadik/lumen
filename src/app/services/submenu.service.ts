import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubmenuService {
  private channelsSource = new BehaviorSubject<string[]>(['Pickleball Expert']);
  channels$ = this.channelsSource.asObservable();
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

  addChannel(name: string) {
    if (name.trim()) {
      const updatedChannels = [...this.channelsSource.value, name.trim()];
      this.channelsSource.next(updatedChannels);
    }
  }
}