import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {
  @Input() active: string = '';
  @Output() menuSelect = new EventEmitter<string>();

  menus = [
    { key: 'booking', image: 'assets/icons/profile-circle-icon.svg' },
    { key: 'events', image: 'assets/icons/message-typing-icon.svg' },
    { key: 'memberships', image: 'assets/icons/profile-stick-icon.svg' },
    { key: 'shop', image: 'assets/icons/phone-icon.svg' },
    { key: 'support', image: 'assets/icons/bookmark-icon.svg' },
    { key: 'supportt', image: 'assets/icons/gear-icon.svg' }
  ];

  selectMenu(key: string) {
    this.active = key;
    this.menuSelect.emit(key);
    console.log(key);
  }
}
