import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.css'
})
export class PrimaryButtonComponent {
  @Input() text: string = 'Learn more';
  @Input() bgColor: string = '#06ACCE';
  @Input() hoverColor: string = '#0799B7';
  @Input() class: string = '';
  hovering = false;
}

