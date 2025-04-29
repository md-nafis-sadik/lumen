import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { combineLatest } from 'rxjs';
import { AutoScrollInputDirective } from '../../directives/auto-scroll-input.directive';
import { HeaderComponent } from '../../layouts/header/header.component';
import { SidebarComponent } from '../../layouts/sidebar/sidebar.component';
import { ChatMessage } from '../../models/chat.model';
import { ChatSelectionService } from '../../services/chat-selection.service';
import { ChatStoreService } from '../../services/chat-store.service';
import { SharedService } from '../../services/shared.service';
import { SubmenuService } from '../../services/submenu.service';
import { ChatsComponent } from '../../shared/components/chats/chats.component';
import { PrimaryButtonComponent } from '../../shared/components/common/primary-button/primary-button.component';
import { CourtDetailsComponent } from '../../shared/components/court-details/court-details.component';
import { ImageSliderComponent } from '../../shared/components/image-slider/image-slider.component';
import { PickleballBookingCardComponent } from '../../shared/components/pickleball-booking-card/pickleball-booking-card.component';
import { DateFormatterPipe } from '../../shared/pipes/date-formatter.pipe';
import { TimeAgoPipe } from '../../shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    SidebarComponent,
    CourtDetailsComponent,
    ImageSliderComponent,
    PickleballBookingCardComponent,
    FormsModule,
    PrimaryButtonComponent,
    ReactiveFormsModule,
    DateFormatterPipe,
    TimeAgoPipe,
    PickleballBookingCardComponent,
    ChatsComponent,
    AutoScrollInputDirective,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  isDetailsOn = false;
  selectedChatId: string | null = null;
  showSlider = true;
  sidebarOpen = false;
  isExpanded: boolean = false;
  channels = ['Pickleball Expert'];
  showAddChannelModal = false;
  showLocationSelectModal = false;
  newChannelName = '';
  showSettingsSidebar = false;
  showNotificationsSidebar = false;
  showAvatarDropdown = false;
  userInput = '';
  messages: {
    sender: 'user' | 'bot';
    content: string[];
    type: 'text' | 'booking';
    timestamp: Date;
    avatar: string;
  }[] = [];
  chatData: ChatMessage[] = [];

  constructor(
    private route: ActivatedRoute,
    private submenuService: SubmenuService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private chatStore: ChatStoreService,
    private chatService: ChatSelectionService,
    private sharedService: SharedService
  ) {
    this.initializeSidebarState();
    this.chatService.selectedChatId$.subscribe((chatId) => {
      this.selectedChatId = chatId;
    });
  }

  @ViewChild(ChatsComponent) chatMessages!: ChatsComponent;

  trackById(index: number, item: any): any {
    return item.id || index;
  }

  ngOnInit() {
    this.setupSubmenuSubscriptions();
    this.setupResizeListener();
    combineLatest([
      this.route.queryParams,
      this.chatService.selectedChatId$,
    ]).subscribe(([params, serviceChatId]) => {
      const chatId = serviceChatId || params['chatId'];
      if (chatId) {
      }
    });

    this.sharedService.isDetailsOn$.subscribe((state) => {
      this.isDetailsOn = state;
    });

    if (isPlatformBrowser(this.platformId) && window.innerWidth < 1024) {
      this.sharedService.sidebarOpen$.subscribe((open) => {
        this.sidebarOpen = open;
      });
    }

    this.sharedService.isExpanded$.subscribe((expanded) => {
      this.isExpanded = expanded;
    });
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

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
        avatar: 'assets/icons/Avatar.png',
      },
    ];

    this.chatStore.updateChat(this.selectedChatId, newMessages);
    this.userInput = '';
    this.showSlider = false;

    setTimeout(() => {
      const updatedChat = this.chatStore.getChat(this.selectedChatId);
      // Bot message with proper typing
      const newMessage: ChatMessage =
        trimmed.toLowerCase().includes('book') &&
        trimmed.toLowerCase().includes('pickleball')
          ? {
              id: Date.now().toString(),
              sender: 'bot',
              content: [''],
              type: 'booking',
              timestamp: new Date(),
              avatar: 'assets/icons/LUMEN.svg',
            }
          : {
              id: Date.now().toString(),
              sender: 'bot',
              content: ["I'm here to help!"],
              type: 'text',
              timestamp: new Date(),
              avatar: 'assets/icons/LUMEN.svg',
            };

      this.chatData = [...this.chatData, newMessage];
    }, 300);
  }

  private initializeSidebarState() {
    if (isPlatformBrowser(this.platformId)) {
      this.handleResize();
    }
  }

  private handleResize = () => {
    const isLgScreen = window.innerWidth >= 1024;
    this.sidebarOpen = isLgScreen;
  };

  private setupResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('resize', this.handleResize);
    }
  }

  private setupSubmenuSubscriptions() {
    this.submenuService.showAddChannelModal$.subscribe((show) => {
      this.showAddChannelModal = show;
    });
    this.submenuService.newChannelName$.subscribe((name) => {
      this.newChannelName = name;
    });
    this.submenuService.showLocationSelectModal$.subscribe((show) => {
      this.showLocationSelectModal = show;
    });
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    this.closeAll();
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

  toggleSettings() {
    const wasOpen = this.showSettingsSidebar;
    this.closeAll();
    this.showSettingsSidebar = !wasOpen;
  }

  toggleNotifications() {
    const wasOpen = this.showNotificationsSidebar;
    this.closeAll();
    this.showNotificationsSidebar = !wasOpen;
  }

  toggleAvatar() {
    this.closeAll();
    this.showAvatarDropdown = !this.showAvatarDropdown;
  }

  closeAll() {
    this.showSettingsSidebar = false;
    this.showNotificationsSidebar = false;
    this.showAvatarDropdown = false;
  }

  onMessageSent(message: string) {
    const trimmed = message.trim();
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
        avatar: 'assets/icons/Avatar.png',
      },
    ];

    this.chatStore.updateChat(this.selectedChatId, newMessages);
    this.userInput = '';
    this.showSlider = false;

    setTimeout(() => {
      // Bot message with proper typing
      const newMessage1: ChatMessage = {
        id: Date.now().toString(),
        sender: 'user' as const,
        content: [message],
        type: 'text' as const,
        timestamp: new Date(),
        avatar: 'assets/icons/Avatar.png',
      };

      const newMessage: ChatMessage =
        trimmed.toLowerCase().includes('book') &&
        trimmed.toLowerCase().includes('pickleball')
          ? {
              id: Date.now().toString(),
              sender: 'bot',
              content: [''],
              type: 'booking',
              timestamp: new Date(),
              avatar: 'assets/icons/LUMEN.svg',
            }
          : {
              id: Date.now().toString(),
              sender: 'bot',
              content: ["I'm here to help!"],
              type: 'text',
              timestamp: new Date(),
              avatar: 'assets/icons/LUMEN.svg',
            };

      this.chatData = [...this.chatData, newMessage1, newMessage];
    }, 300);
  }
}
