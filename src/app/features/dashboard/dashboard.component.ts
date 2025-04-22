import { Component, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from '../../layouts/header/header.component';
import { SidebarComponent } from '../../layouts/sidebar/sidebar.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ImageSliderComponent } from '../../shared/components/image-slider/image-slider.component';
import { PickleballBookingCardComponent } from '../../shared/components/pickleball-booking-card/pickleball-booking-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SubmenuService } from '../../services/submenu.service';
import { PrimaryButtonComponent } from '../../shared/components/common/primary-button/primary-button.component';
import { DateFormatterPipe } from '../../shared/pipes/date-formatter.pipe';
import { TimeAgoPipe } from '../../shared/pipes/time-ago.pipe';
import { ChatsComponent } from '../../shared/components/chats/chats.component';
import { ChatMessage } from '../../models/chat.model';
import { ChatStoreService } from '../../services/chat-store.service';
import { ChatSelectionService } from '../../services/chat-selection.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, SidebarComponent, ImageSliderComponent, PickleballBookingCardComponent, FormsModule, PrimaryButtonComponent, ReactiveFormsModule, DateFormatterPipe, TimeAgoPipe, PickleballBookingCardComponent, ChatsComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {

  constructor(

    private route: ActivatedRoute,
    private submenuService: SubmenuService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private chatStore: ChatStoreService,
    private chatService: ChatSelectionService
  ) {
    this.initializeSidebarState();
    this.chatService.selectedChatId$.subscribe(chatId => {
      this.selectedChatId = chatId;
    });
  }
  chatData: ChatMessage[] = [];

  @ViewChild(ChatsComponent) chatMessages!: ChatsComponent;

  trackById(index: number, item: any): any {
    return item.id || index;
  }

  selectedChatId: string | null = null;
  showSlider = true;
  sidebarOpen = true;
  channels = ['Pickleball Expert'];
  showAddChannelModal = false;
  showLocationSelectModal = false;
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
    content: string[],
    type: 'text' | 'booking',
    timestamp: Date,
    avatar: string
  }[] = [];

  // Updated sendMessage() method
  sendMessage() {
    const trimmed = this.userInput.trim();
    if (!trimmed) return;

    const currentChat = this.chatStore.getChat(this.selectedChatId);
    const newMessages = [
      ...currentChat,
      {
        id: Date.now().toString(),
        sender: 'user' as const,
        content: [trimmed],
        type: 'text' as const,
        timestamp: new Date(),
        avatar: 'assets/icons/Avatar.png'
      }
    ];

    this.chatStore.updateChat(this.selectedChatId, newMessages);
    this.userInput = '';
    this.showSlider = false;

    setTimeout(() => {
      const updatedChat = this.chatStore.getChat(this.selectedChatId);
      // Bot message with proper typing
      const newMessage: ChatMessage = trimmed.toLowerCase().includes('book') &&
        trimmed.toLowerCase().includes('pickleball')
        ? {
          id: Date.now().toString(),
          sender: 'bot',
          content: [''],
          type: 'booking',
          timestamp: new Date(),
          avatar: 'assets/icons/LUMEN.svg'
        }
        : {
          id: Date.now().toString(),
          sender: 'bot',
          content: ["I'm here to help!"],
          type: 'text',
          timestamp: new Date(),
          avatar: 'assets/icons/LUMEN.svg'
        };

      this.chatData = [...this.chatData, newMessage];
    }, 300);
  }


  ngOnInit() {
    this.setupSubmenuSubscriptions();
    this.setupResizeListener();
    combineLatest([
      this.route.queryParams,
      this.chatService.selectedChatId$
    ]).subscribe(([params, serviceChatId]) => {
      const chatId = serviceChatId || params['chatId'];
      if (chatId) {
        // Create new array reference to trigger change detection
        this.showSlider = false;
      }
    });
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
    this.submenuService.showLocationSelectModal$.subscribe(show => {
      this.showLocationSelectModal = show;
    });
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  addChannel() {
    this.submenuService.openAddChannelModal();
  }

  selectLocation() {

    this.submenuService.openLocationSelectModal();
  }


  closeModal() {
    this.submenuService.closeAddChannelModal();
    this.submenuService.closeLocationSelectModal();
  }

  saveChannel() {
    this.submenuService.addChannel(this.newChannelName);
    this.closeModal();
  }

  sendQuickMessage(message: string) {
    this.userInput = message;
    this.sendMessage();
    this.showSlider = false;
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


  onMessageSent(message: string) {
    const trimmed = message.trim();
    if (!trimmed) return;

    // User message with proper typing
    this.chatData = [
      ...this.chatData,
      {
        id: Date.now().toString(),
        sender: 'user',
        content: [trimmed],
        type: 'text',
        timestamp: new Date(),
        avatar: 'assets/icons/Avatar.png'
      }
    ];


    this.showSlider = false;

    setTimeout(() => {
      // Bot message with proper typing
      const newMessage: ChatMessage = trimmed.toLowerCase().includes('book') &&
        trimmed.toLowerCase().includes('pickleball')
        ? {
          id: Date.now().toString(),
          sender: 'bot',
          content: [''],
          type: 'booking',
          timestamp: new Date(),
          avatar: 'assets/icons/LUMEN.svg'
        }
        : {
          id: Date.now().toString(),
          sender: 'bot',
          content: ["I'm here to help!"],
          type: 'text',
          timestamp: new Date(),
          avatar: 'assets/icons/LUMEN.svg'
        };

      this.chatData = [...this.chatData, newMessage];
    }, 300);
  }

}


