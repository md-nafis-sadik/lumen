import { Component, ElementRef, ViewChild, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { CommonModule, isPlatformBrowser  } from '@angular/common';
import { HeaderComponent } from '../../layouts/header/header.component';
import { SidebarComponent } from '../../layouts/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ImageSliderComponent } from '../../shared/components/image-slider/image-slider.component';
import { PickleballBookingCardComponent } from '../../shared/components/pickleball-booking-card/pickleball-booking-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SubmenuService } from '../../services/submenu.service';
import { PrimaryButtonComponent } from '../../shared/components/common/primary-button/primary-button.component';
import { DateFormatterPipe } from '../../shared/pipes/date-formatter.pipe';
import { TimeAgoPipe } from '../../shared/pipes/time-ago.pipe';
import { ChatsComponent } from '../../shared/components/chats/chats.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, SidebarComponent, ImageSliderComponent, PickleballBookingCardComponent, FormsModule, PrimaryButtonComponent, ReactiveFormsModule, DateFormatterPipe, TimeAgoPipe, PickleballBookingCardComponent, ChatsComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {

  trackById(index: number, item: any): any {
    return item.id || index;
  }
  
  selectedChatId: string | null = null;
  
showSlider = true;

sidebarOpen = true;

channels = ['Pickleball Expert'];
showAddChannelModal = false;
newChannelName = '';
  

  sliderSlides = [
    {
      title: 'Play More,',
      highlight: 'Search',
      after_highlight: 'Less!',
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
      highlight: 'Win',
      after_highlight: 'the Fun!',
      description: 'Find and book top-rated pickleball courts near you.',
      buttonText: 'Get Started',
      patternUrl: 'assets/patterns/Vector.svg',
      imageUrl: 'assets/images/2025/girl-playing.png',
      gradient: 'circle at top right, #1b83c1, #052232',
      textColor: 'text-white-00',
      highlightColor: 'text-[#3b94c9]',
      buttonColor: '#06ACCE',
      buttonHoverColor: '#0799B7',
    },
    {
      title: 'Play More,',
      highlight: 'Search',
      after_highlight: 'Less!',
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
  messages: { 
    sender: 'user' | 'bot', 
    content: string, 
    type: 'text' | 'booking',
    timestamp: Date,
    avatar: string 
  }[] = [];

sendMessage() {
  const trimmed = this.userInput.trim();
  if (!trimmed) return;

  // Push user message
  this.messages.push({ 
    sender: 'user', 
    content: trimmed, 
    type: 'text',
    timestamp: new Date(),
    avatar: 'assets/icons/Avatar.png' 
  });

  this.userInput = '';
  this.showSlider = false;

  // Handle response
  setTimeout(() => {
    if (trimmed.toLowerCase().includes('book') && trimmed.toLowerCase().includes('pickleball')) {
      this.messages.push({ 
        sender: 'bot', 
        content: '', 
        type: 'booking',
        timestamp: new Date(),
        avatar: 'assets/icons/LUMEN.svg' 
      });
    } else {
      this.messages.push({ 
        sender: 'bot', 
        content: "I'm here to help!", 
        type: 'text',
        timestamp: new Date(),
        avatar: 'assets/icons/LUMEN.svg' 
      });
    }
  }, 300);
}


constructor(
  private submenuService: SubmenuService,
  @Inject(PLATFORM_ID) private platformId: Object
) {
  this.initializeSidebarState();
}

ngOnInit() {
  this.setupSubmenuSubscriptions();
  this.setupResizeListener();
}

ngOnDestroy() {
  if (isPlatformBrowser(this.platformId)) {
    window.removeEventListener('resize', this.handleResize);
  }
}

private initializeSidebarState() {
  if (isPlatformBrowser(this.platformId)) {
    this.handleResize();
  }
}

private handleResize = () => {
  const isLgScreen = window.innerWidth >= 1024;
  this.sidebarOpen = isLgScreen;
}

private setupResizeListener() {
  if (isPlatformBrowser(this.platformId)) {
    window.addEventListener('resize', this.handleResize);
  }
}

private setupSubmenuSubscriptions() {
  this.submenuService.showAddChannelModal$.subscribe(show => {
    this.showAddChannelModal = show;
  });
  this.submenuService.newChannelName$.subscribe(name => {
    this.newChannelName = name;
  });
}

toggleSidebar() {
  this.sidebarOpen = !this.sidebarOpen;
}


addChannel() {
  this.submenuService.openAddChannelModal();
}

closeModal() {
  this.submenuService.closeAddChannelModal();
}

saveChannel() {
  this.submenuService.addChannel(this.newChannelName);
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


  

  @ViewChild(ChatsComponent) chatMessages!: ChatsComponent;

  onMessageSent(message: string) {
    // Existing sendMessage logic
    const trimmed = message.trim();
    if (!trimmed) return;

    this.messages.push({ 
      sender: 'user', 
      content: trimmed, 
      type: 'text',
      timestamp: new Date(),
      avatar: 'assets/icons/Avatar.png' 
    });

    this.showSlider = false;

    setTimeout(() => {
      if (trimmed.toLowerCase().includes('book') && trimmed.toLowerCase().includes('pickleball')) {
        this.messages.push({ 
          sender: 'bot', 
          content: '', 
          type: 'booking',
          timestamp: new Date(),
          avatar: 'assets/icons/LUMEN.svg' 
        });
      } else {
        this.messages.push({ 
          sender: 'bot', 
          content: "I'm here to help!", 
          type: 'text',
          timestamp: new Date(),
          avatar: 'assets/icons/LUMEN.svg' 
        });
      }
    }, 300);
  }

}


