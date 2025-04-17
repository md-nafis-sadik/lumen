import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../layouts/header/header.component';
import { SidebarComponent } from '../../layouts/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ImageSliderComponent } from '../../shared/components/image-slider/image-slider.component';
import { PickleballBookingCardComponent } from '../../shared/components/pickleball-booking-card/pickleball-booking-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SubmenuService } from '../../services/submenu.service';
import { PrimaryButtonComponent } from '../../shared/components/common/primary-button/primary-button.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, SidebarComponent, ImageSliderComponent, PickleballBookingCardComponent, FormsModule, PrimaryButtonComponent, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {

showSlider = true;

sidebarOpen = true;

toggleSidebar() {
  this.sidebarOpen = !this.sidebarOpen;
}
  

  sliderSlides = [
    {
      title: 'Play More,',
      highlight: 'Search Less!',
      description: 'Reserve your favourite pickleball court effortlessly.',
      buttonText: 'Learn more',
      patternUrl: 'assets/patterns/Vector.svg',
      imageUrl: 'assets/images/2025/girl-playing.png',
      gradient: 'circle at top right, #118a9f, #07282e',
      textColor: 'text-white-00',
      highlightColor: 'text-[#06ACCE]',
      buttonColor: '#06ACCE',
      buttonHoverColor: '#0799B7',
    },
    {
      title: 'Join the Game,',
      highlight: 'Win the Fun!',
      description: 'Find and book top-rated pickleball courts near you.',
      buttonText: 'Get Started',
      patternUrl: 'assets/patterns/Vector.svg',
      imageUrl: 'assets/images/2025/girl-playing.png',
      gradient: 'circle at top right, #1e3c72, #2a5298',
      textColor: 'text-black',
      highlightColor: 'text-green-400',
      buttonColor: '#06ACCE',
      buttonHoverColor: '#0799B7',
    },
    {
      title: 'Play More,',
      highlight: 'Search Less!',
      description: 'Reserve your favourite pickleball court effortlessly.',
      buttonText: 'Learn more',
      patternUrl: 'assets/patterns/Vector.svg',
      imageUrl: 'assets/images/2025/girl-playing.png',
      gradient: 'circle at top right, #118a9f, #07282e',
      textColor: 'text-white-00',
      highlightColor: 'text-[#06ACCE]',
      buttonColor: '#06ACCE',
      buttonHoverColor: '#0799B7',
    },
  ];
  

  userInput = '';
messages: { sender: 'user' | 'bot', content: string, type: 'text' | 'booking' }[] = [];

sendMessage() {
  const trimmed = this.userInput.trim();
  if (!trimmed) return;

  // Push user message
  this.messages.push({ sender: 'user', content: trimmed, type: 'text' });

  // Reset input
  this.userInput = '';
  this.showSlider = false;

  // Handle response
  setTimeout(() => {
    if (trimmed.toLowerCase().includes('book') && trimmed.toLowerCase().includes('pickleball')) {
      this.messages.push({ sender: 'bot', content: '', type: 'booking' });
    } else {
      this.messages.push({ sender: 'bot', content: "I'm here to help!", type: 'text' });
    }
  }, 300);
}

constructor(private submenuService: SubmenuService) {}

ngOnInit() {
  // Optional: Subscribe to the modal and name states if needed
  this.submenuService.showAddChannelModal$.subscribe((show) => {
    this.showAddChannelModal = show;
  });
  this.submenuService.newChannelName$.subscribe((name) => {
    this.newChannelName = name;
  });
}
channels = ['Pickleball Expert'];
showAddChannelModal = false;
newChannelName = '';

addChannel() {
  this.submenuService.openAddChannelModal();
}

closeModal() {
  this.submenuService.closeAddChannelModal();
}

saveChannel() {
  this.submenuService.addChannel(this.channels, this.newChannelName);
  this.closeModal();
}

sendQuickMessage(message: string) {
  this.userInput = message;
  this.sendMessage();
}

showSettingsSidebar = false;
showNotificationsSidebar = false;
showAvatarDropdown = false;

toggleSettings() {
  this.closeAll();
  this.showSettingsSidebar = true;
}

toggleNotifications() {
  this.closeAll();
  this.showNotificationsSidebar = true;
}

toggleAvatar() {
  this.closeAll();
  this.showAvatarDropdown = true;
}

closeAll() {
  this.showSettingsSidebar = false;
  this.showNotificationsSidebar = false;
  this.showAvatarDropdown = false;
}

}


