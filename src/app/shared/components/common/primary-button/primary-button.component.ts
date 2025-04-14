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
  @Input() fontSize: string = 'text-base';   // optional font size
  @Input() padding: string = 'py-2';         // optional padding
  @Input() width: string = 'w-[130px]';      // optional width

  hovering = false;

  get combinedClasses(): string {
    return `
      mt-4
      ${this.width}
      text-white 
      rounded-lg 
      transition-colors 
      cursor-pointer 
      ${this.fontSize} 
      ${this.padding} 
      ${this.class}
    `;
  }
}



