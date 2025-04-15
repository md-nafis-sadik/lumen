import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  standalone: true,
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css'],
  imports: [CommonModule]
})
export class MenuButtonComponent {
  @Input() image: string = '';
  @Input() alt: string = '';
  @Input() isActive: boolean = false;
  @Input() activeColor: string = '#9BDEEB'; // Default active color
  @Input() inactiveColor: string = '#9BDEEB'; // Default inactive color

  @Output() click = new EventEmitter<void>(); // Define the output click event

  // Base button class with transition for smooth border and box-shadow changes
  get baseButtonClass(): string {
    return 'flex items-center justify-center w-[40px] h-10 rounded-lg transition-all duration-300 cursor-pointer';
  }

  // Get button styles based on the active state
  get buttonStyle(): { [klass: string]: any } {
    const color = this.isActive ? this.activeColor : this.inactiveColor;
    return {
      'border': `1px solid ${color}`, // Apply border color dynamically
      'border-bottom': `3px solid ${color}`,
      'transition': 'border 0.3s ease',  // Apply smooth transition for the border
    };
  }

  // Active style for when the button is in the active state
  get activeStyle(): { [key: string]: string } {
    return {
      'border': `1px solid ${this.activeColor}`,
      'border-bottom': `3px solid ${this.activeColor}`,
      'transition': 'border 0.3s ease', // Apply transition for the active state as well
    };
  }

  // Emit the click event when the button is clicked
  onClick() {
    this.click.emit();
  }
}
