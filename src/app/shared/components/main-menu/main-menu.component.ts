import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {
  @Input() active: string = '';  // This will hold the active menu key.
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
    this.active = key;  // Set active key to the selected menu
    this.menuSelect.emit(key);  // Emit the active key to the parent component
    console.log(key);  // Debugging to check selected key
  }

  // Check if the current menu button is active
  isActiveMenu(key: string): boolean {
    return key === this.active;  // Returns true if the key is the active one
  }
}
