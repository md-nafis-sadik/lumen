import { Component, Input, OnInit, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from '../common/primary-button/primary-button.component';
import { SearchInputComponent } from '../common/search-input/search-input.component';
import { SubmenuService } from '../../../services/submenu.service';
import { contactlist, Messages, channel } from '../chats/data';
interface SubmenuItem {
  key: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'app-submenu',
  standalone: true,
  imports: [CommonModule, PrimaryButtonComponent, SearchInputComponent, FormsModule],
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent implements OnInit {
  @Input() menu: string = 'booking';
  activeSubmenu: string = '';
  searchQuery = '';
  filteredItems: SubmenuItem[] = [];

  favourites = contactlist;
  directMessages = Messages;
  channels = channel;
  filteredFavourites = this.favourites;
  filteredDirectMessages = this.directMessages;
  filteredChannels = this.channels;
  
  // Helper to check if current menu is chat
  get isChatMenu(): boolean {
    return this.menu === 'chat';
  }

  private submenuItemsMap: { [key: string]: SubmenuItem[] } = {
    booking: [
      { key: 'bookCourt', icon: 'assets/icons/calender-tick-icon.svg', label: 'Pickleball Booking' },
      { key: 'events', icon: 'assets/icons/events-icon.svg', label: 'Events' },
      { key: 'membership', icon: 'assets/icons/profile-circle-icon.svg', label: 'Membership' },
      { key: 'shopping', icon: 'assets/icons/shopping-bag-icon.svg', label: 'Shopping' },
      { key: 'bookingHistory', icon: 'assets/icons/headphone-icon.svg', label: 'Contact Support' }
    ],
    chat: [
      { key: 'upcomingEvents', icon: 'assets/icons/calender-icon.svg', label: 'Upcoming Events' },
      { key: 'pastEvents', icon: 'assets/icons/events-icon.svg', label: 'Past Events' }
    ],
    memberships: [
      { key: 'addMember', icon: 'assets/icons/events-icon.svg', label: 'Add Member' },
      { key: 'allMembers', icon: 'assets/icons/headphone-icon.svg', label: 'All Members' }
    ],
    shop: [
      { key: 'myOrders', icon: 'assets/icons/events-icon.svg', label: 'My Orders' },
      { key: 'browseStore', icon: 'assets/icons/profile-circle-icon.svg', label: 'Browse Store' }
    ],
    support: [
      { key: 'faqs', icon: 'assets/icons/events-icon.svg', label: 'FAQs' },
      { key: 'contactUs', icon: 'assets/icons/events-icon.svg', label: 'Contact Us' }
    ]
  };

  // channels = ['Pickleball Expert'];

  // submenu.component.ts
ngOnInit() {
  this.setActiveSubmenu();
  this.filteredItems = this.getFilteredSubmenuItems();

  // Update the subscription to use correct channel format
  // this.submenuService.channels$.subscribe((channels: any) => {
  //   // Transform string channels to object format if needed
  //   this.channels = channels.map((ch: string | any) => typeof ch === 'string' ? {
  //     id: `gen-${Math.random().toString(36).substr(2, 9)}`,
  //     type: 'channel',
  //     name: ch,
  //     badgeCount: null
  //   } : ch);
    
  //   this.changeDetector.detectChanges();
  // });
}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['menu']) {
      this.setActiveSubmenu();
      this.filteredItems = this.getFilteredSubmenuItems();
    }
  }

  setActiveSubmenu() {
    const firstItem = this.getFilteredSubmenuItems()[0];
    if (firstItem) {
      this.activeSubmenu = firstItem.key;
    }
  }

  selectSubmenu(key: string) {
    this.activeSubmenu = key;
  }

  getSubmenuItems(): SubmenuItem[] {
    return this.submenuItemsMap[this.menu] || [];
  }

  getFilteredSubmenuItems(): SubmenuItem[] {
    const items = this.getSubmenuItems();
    if (!this.searchQuery.trim()) return items;
    return items.filter(item =>
      item.label.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
  constructor(
    private submenuService: SubmenuService,
    private changeDetector: ChangeDetectorRef
  ) {}
  onSearchChange() {
    if (this.isChatMenu) {
      const query = this.searchQuery.toLowerCase();
      this.filteredFavourites = this.favourites.filter(c => 
        c.name.toLowerCase().includes(query)
      );
      this.filteredDirectMessages = this.directMessages.filter(m => 
        m.name.toLowerCase().includes(query)
      );
      this.filteredChannels = this.channels.filter(ch => 
        ch.name.toLowerCase().includes(query)
      );
    } else {
      this.filteredItems = this.getFilteredSubmenuItems();
    }
    this.changeDetector.detectChanges();
  }



  openChannelModal() {
    this.submenuService.openAddChannelModal();
  }

  

}
