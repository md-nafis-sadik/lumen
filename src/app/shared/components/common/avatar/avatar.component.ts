import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css'],
  imports: [CommonModule]
})
export class AvatarComponent {
  @Input() src: string = ''; // Avatar image source
  @Input() customClass: string = ''; // Additional classes for styling
}
