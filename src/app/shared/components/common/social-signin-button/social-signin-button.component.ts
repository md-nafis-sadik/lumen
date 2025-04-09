import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-signin-button.component.html',
  styleUrls: ['./social-signin-button.component.css']
})
export class SocialSigninButtonComponent {
  @Input() iconClass?: string;         // e.g., 'fa-brands fa-apple'
  @Input() imageSrc?: string;          // e.g., '/icons/google-icon.png'
  @Input() imageAlt: string = '';      // accessibility
  @Input() label: string = 'Sign in';  // e.g., 'Sign in with Google'
}
