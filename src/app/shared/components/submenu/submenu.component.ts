// Define the SubmenuItem interface
interface SubmenuItem {
  key: string;
  icon: string;
  label: string;
}

import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from '../common/primary-button/primary-button.component';
import { SearchInputComponent } from '../common/search-input/search-input.component';
import { SubmenuButtonComponent } from '../common/submenu-button/submenu-button.component';
 // Assuming you're using this interface

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
  searchQuery = '';  // Holds the search query entered by the user
  filteredItems: SubmenuItem[] = []; // Filtered items that will be displayed in the submenu

  // Define submenu items map
  private submenuItemsMap: { [key: string]: SubmenuItem[] } = {
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

  ngOnInit() {
    this.setActiveSubmenu();
    this.filteredItems = this.getFilteredSubmenuItems(); // Initialize with all items
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['menu']) {
      this.setActiveSubmenu();
      this.filteredItems = this.getFilteredSubmenuItems(); // Update filtered items when the menu changes
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

  // Get submenu items based on the current menu
  getSubmenuItems(): SubmenuItem[] {
    return this.submenuItemsMap[this.menu] || [];
  }

  // Filter submenu items based on the search query
  getFilteredSubmenuItems(): SubmenuItem[] {
    const items = this.getSubmenuItems();
    if (this.searchQuery.trim() === '') {
      return items;  // If no search query, return all items
    }

    // Filter items based on label (case-insensitive)
    return items.filter(item =>
      item.label.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Handle search query changes (this method will be triggered immediately when the user types)
  onSearchChange() {
    this.filteredItems = this.getFilteredSubmenuItems();  // Update the filtered items
  }

  channels = ['Pickleball Expert'];

  addChannel() {
    const name = prompt('Enter new channel name');
    if (name) {
      this.channels.push(name);
    }
  }
}
