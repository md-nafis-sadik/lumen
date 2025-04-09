import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-submenu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent {
  @Input() menu: string = 'booking';

  getSubmenuItems() {
    const map: any = {
      booking: [
        { icon: 'calendar_today', label: 'Book Court' },
        { icon: 'history', label: 'Booking History' }
      ],
      events: [
        { icon: 'event_available', label: 'Upcoming Events' },
        { icon: 'event_busy', label: 'Past Events' }
      ],
      memberships: [
        { icon: 'person_add', label: 'Add Member' },
        { icon: 'group', label: 'All Members' }
      ],
      shop: [
        { icon: 'shopping_cart', label: 'My Orders' },
        { icon: 'store', label: 'Browse Store' }
      ],
      support: [
        { icon: 'help_outline', label: 'FAQs' },
        { icon: 'contact_support', label: 'Contact Us' }
      ]
    };
    return map[this.menu] || [];
  }
}
