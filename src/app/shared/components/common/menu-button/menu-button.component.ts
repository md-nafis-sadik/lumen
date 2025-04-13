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
  @Input() inactiveColor: string = '#D1D5DB'; // Default inactive color

  @Output() click = new EventEmitter<void>(); // Define the output click event

  get buttonClasses(): string {
    return this.isActive
      ? `flex items-center justify-center w-[40px] h-10 rounded-lg ring-1 ring-[${this.activeColor}] border-b-2 border-b-[${this.activeColor}]`
      : `flex items-center justify-center w-[40px] h-10 rounded-lg hover:ring-1 hover:ring-[${this.inactiveColor}] transition cursor-pointer`;
  }

  // Emit the click event when the button is clicked
  onClick() {
    this.click.emit();
  }
}
