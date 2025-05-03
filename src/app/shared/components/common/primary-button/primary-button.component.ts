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

  // Optional styling inputs
  @Input() customClass: string = '';
  @Input() fontSize: string = 'text-base';
  @Input() padding: string = 'py-2';
  @Input() width: string = 'w-[130px]';

  get combinedClasses(): string {
    return `
      mt-4
      ${this.width}
      text-white 
      rounded-lg 
      transition-colors 
      duration-200 
      cursor-pointer 
      bg-mint-350 
      hover:bg-mint-500 
      ${this.fontSize} 
      ${this.padding} 
      ${this.customClass}
    `.trim().replace(/\s+/g, ' ');
  }
}
