import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SocialIcon } from '../../../models/icon.model';
import { SocialIconComponent } from '../common/social-icon/social-icon.component';

@Component({
  selector: 'app-welcome-sidebar',
  imports: [CommonModule, SocialIconComponent],
  standalone: true,
  templateUrl: './welcome-sidebar.component.html',
  styleUrl: './welcome-sidebar.component.css'
})
export class WelcomeSidebarComponent {
  socialIcons: SocialIcon[] = [
    { type: 'image', className: 'assets/icons/facebook-icon.svg', link: '/#', altText: 'Wave Icon', color: '120' },
    { type: 'image', className: 'assets/icons/linkedin-icon.svg', link: '/#', altText: 'Wave Icon', color: '120' },
    { type: 'image', className: 'assets/icons/insta-icon.svg', link: '/#', altText: 'Wave Icon', color: '120' },
    { type: 'image', className: 'assets/icons/twitter-icon.svg', link: '/#', altText: 'Wave Icon', color: '120' },
    { type: 'image', className: 'assets/icons/google-icon-white.svg', link: '/#', altText: 'Wave Icon', color: '120' },
  ];
}
