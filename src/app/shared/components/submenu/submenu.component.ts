import { Component, Input, OnInit, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from '../common/primary-button/primary-button.component';
import { SearchInputComponent } from '../common/search-input/search-input.component';
import { SubmenuService } from '../../../services/submenu.service';
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

  channels = ['Pickleball Expert'];

  ngOnInit() {
    this.setActiveSubmenu();
    this.filteredItems = this.getFilteredSubmenuItems();
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
    this.filteredItems = this.getFilteredSubmenuItems();
    // Force change detection if needed
    this.changeDetector.detectChanges();
  }


  openChannelModal() {
    this.submenuService.openAddChannelModal();
  }

}
