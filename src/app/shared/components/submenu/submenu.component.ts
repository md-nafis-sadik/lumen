import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from '../common/primary-button/primary-button.component';
import { SearchInputComponent } from '../common/search-input/search-input.component';
import { SubmenuButtonComponent } from '../common/submenu-button/submenu-button.component';

@Component({
  selector: 'app-submenu',
  standalone: true,
  imports: [CommonModule, PrimaryButtonComponent, SearchInputComponent, SubmenuButtonComponent],
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent implements OnInit {
  @Input() menu: string = 'booking';
  activeSubmenu: string = '';  // To keep track of the active submenu
  searchQuery = '';


  getSubmenuItems() {
    const map: any = {
      booking: [
        { key: 'bookCourt', icon: 'assets/icons/calender-icon.svg', label: 'Pickleball Booking' },
        { key: 'events', icon: 'assets/icons/events-icon.svg', label: 'Events' },
        { key: 'membership', icon: 'assets/icons/profile-circle-icon.svg', label: 'Membership' },
        { key: 'shopping', icon: 'assets/icons/shopping-bag-icon.svg', label: 'Shopping' },
        { key: 'bookingHistory', icon: 'assets/icons/headphone-icon.svg', label: 'Contact Support' }
      ],
      events: [
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
    return map[this.menu] || [];
  }

  ngOnInit() {
    // Set the first submenu item as active when the component is initialized
    this.setActiveSubmenu();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['menu']) {
      // When the menu changes, set the first submenu item of the new menu as active
      this.setActiveSubmenu();
    }
  }

  setActiveSubmenu() {
    const firstItem = this.getSubmenuItems()[0];
    if (firstItem) {
      this.activeSubmenu = firstItem.key;
    }
  }

  // Method to handle selection of submenu items
  selectSubmenu(key: string) {
    this.activeSubmenu = key;
  }

  channels = ['Pickleball Expert'];

  addChannel() {
    const name = prompt('Enter new channel name');
    if (name) {
      this.channels.push(name);
    }
  }

}
