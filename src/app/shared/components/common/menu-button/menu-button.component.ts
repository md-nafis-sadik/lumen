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

  get baseButtonClass(): string {
    return 'flex items-center justify-center w-[40px] h-10 rounded-lg transition cursor-pointer';
  }
  
  get buttonStyle(): { [klass: string]: any } {
    const color = this.isActive ? this.activeColor : this.inactiveColor;
    return {
      'borderBottom': `2px solid ${color}`,
      'boxShadow': `0 0 0 1px ${color}`, // mimic ring
    };
  }
  
  get activeStyle(): { [key: string]: string } {
    return {
      borderBottom: `2px solid ${this.activeColor}`,
      boxShadow: `0 0 0 1px ${this.activeColor}`, // mimics Tailwind ring
    };
  }

  // Emit the click event when the button is clicked
  onClick() {
    this.click.emit();
  }
}
