import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SocialIcon } from '../../shared/models/icon.model';
import { SocialIconComponent } from '../../shared/social-icon/social-icon.component';

@Component({
  selector: 'app-welcome-sidebar',
  imports: [CommonModule, SocialIconComponent],
  standalone: true,
  templateUrl: './welcome-sidebar.component.html',
  styleUrl: './welcome-sidebar.component.css'
})
export class WelcomeSidebarComponent {
  socialIcons: SocialIcon[] = [
    { type: 'fontawesome', className: 'fa-brands fa-facebook', link: '/#' },
    { type: 'fontawesome', className: 'fa-brands fa-linkedin', link: '/#' },
    { type: 'fontawesome', className: 'fa-brands fa-instagram', link: '/#' },
    {
      type: 'svg',
      link: '/#',
      svgPath: 'M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z',
    },
    { type: 'fontawesome', className: 'fab fa-google', link: '/#' },
  ];
}
