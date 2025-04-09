import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-menu',
  standalone: true,  // If the component is standalone (Angular 14+)
  imports: [CommonModule],  // Add CommonModule here
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {
  @Input() active: string = '';  // Declare active as an @Input()
  @Output() menuSelect = new EventEmitter<string>();  // Emit string type for menuSelect

  menus = [
    { key: 'booking', icon: 'event_note', iconType: 'fontawesome' },
    { key: 'events', icon: 'event', iconType: 'fontawesome' },
    { key: 'memberships', icon: 'group', iconType: 'fontawesome' },
    { key: 'shop', icon: 'shopping-bag', iconType: 'fontawesome' },
    { key: 'support', icon: 'support', iconType: 'fontawesome' }
  ];

  selectMenu(key: string) {
    this.active = key;
    this.menuSelect.emit(key);  // Emit the key as a string
    console.log(key);
  }

  getIconClass(icon: string, iconType: string): string {
    if (iconType === 'material') {
      return `mat-icon material-icons`;  // Material icon class
    } else if (iconType === 'fontawesome') {
      return `fa-solid fa-${icon}`;  // FontAwesome Solid icon class
    }
    return '';  // Default case if needed
  }
}
