import { Component, Input } from '@angular/core';
import { SocialIcon } from '../models/icon.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-icon.component.html',
  styleUrl: './social-icon.component.css'
})
export class SocialIconComponent {
  @Input() icons: SocialIcon[] = [];
}
