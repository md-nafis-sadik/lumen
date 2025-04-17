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

  onMenuClick() {
    console.log('Menu button clicked!');
  }

  onSunClick() {
    console.log('Sun button clicked!');
  }
  @Output() gearClicked = new EventEmitter<void>();
  @Output() bellClicked = new EventEmitter<void>();
  @Output() avatarClicked = new EventEmitter<void>();
      // ... existing code ...
      showAvatarDropdown = false;
      showSettingsSidebar = false;
      showNotificationsSidebar = false;

      
      onGearClick() {
        this.showSettingsSidebar = !this.showSettingsSidebar; 
        this.gearClicked.emit();
      }
      
      onBellClick() {
        this.showNotificationsSidebar = !this.showNotificationsSidebar; 
        this.bellClicked.emit();
      }
      
      toggleAvatarDropdown() {
        this.showAvatarDropdown = !this.showAvatarDropdown;
        this.avatarClicked.emit();
      }
      
  
  
    closeSettings() {
      this.showSettingsSidebar = false;
    }
  
    closeNotifications() {
      this.showNotificationsSidebar = false;
    }
  
    closeAll() {
      this.showSettingsSidebar = false;
      this.showNotificationsSidebar = false;
      this.showAvatarDropdown = false;
    }
  
}
