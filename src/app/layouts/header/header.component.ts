import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../../shared/components/common/logo/logo.component';
import { AvatarComponent } from '../../shared/components/common/avatar/avatar.component';
import { ToggleButtonComponent } from '../../shared/components/common/toggle-button/toggle-button.component';
import { IconButtonComponent } from '../../shared/components/common/icon-button/icon-button.component';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LogoComponent, AvatarComponent, ToggleButtonComponent, IconButtonComponent, ClickOutsideDirective],
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



    // ... existing code ...
    showAvatarDropdown = false;
    showSettingsSidebar = false;
    showNotificationsSidebar = false;
  
    toggleAvatarDropdown() {
      this.showAvatarDropdown = !this.showAvatarDropdown;
    }
  
    onGearClick() {
      this.showSettingsSidebar = true;
      this.showAvatarDropdown = false;
    }
  
    onBellClick() {
      this.showNotificationsSidebar = true;
      this.showAvatarDropdown = false;
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
