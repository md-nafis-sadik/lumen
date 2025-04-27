import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../../shared/components/common/logo/logo.component';
import { AvatarComponent } from '../../shared/components/common/avatar/avatar.component';
import { ToggleButtonComponent } from '../../shared/components/common/toggle-button/toggle-button.component';
import { IconButtonComponent } from '../../shared/components/common/icon-button/icon-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LogoComponent, AvatarComponent, ToggleButtonComponent, IconButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() menuClicked = new EventEmitter<void>();
  @Output() gearClicked = new EventEmitter<void>();
  @Output() bellClicked = new EventEmitter<void>();
  @Output() avatarClicked = new EventEmitter<void>();

  // showAvatarDropdown = false;
  // showSettingsSidebar = false;
  // showNotificationsSidebar = false;

  onMenuClick(event: MouseEvent) {
    event.stopPropagation();
  // Close all local UI elements
  // this.closeAll();
  // Emit event to parent component
  this.menuClicked.emit();

  }

  onSunClick() {
    console.log('Sun button clicked!');
  }

  onGearClick(event: MouseEvent) {
    event.stopPropagation();
    // this.showSettingsSidebar = !this.showSettingsSidebar;
    this.gearClicked.emit();
  }
  
  onBellClick(event: MouseEvent) {
    event.stopPropagation();
    // this.showNotificationsSidebar = !this.showNotificationsSidebar; 
    this.bellClicked.emit();
  }
  
  toggleAvatarDropdown() {
    // this.showAvatarDropdown = !this.showAvatarDropdown;
    this.avatarClicked.emit();
  }

  // closeSettings() {
  //   this.showSettingsSidebar = false;
  // }

  // closeNotifications() {
  //   this.showNotificationsSidebar = false;
  // }

  // closeAll() {
  //   this.showSettingsSidebar = false;
  //   this.showNotificationsSidebar = false;
  //   this.showAvatarDropdown = false;
  // }
}