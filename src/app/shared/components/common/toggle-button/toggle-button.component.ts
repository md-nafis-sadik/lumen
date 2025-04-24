import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent {
  @Input() iconPath: string = 'assets/icons/bars-icon.svg';
  @Input() size: string = 'w-5';
  @Input() containerClass: string = 'w-10 flex items-center justify-center mr-2 lg:mr-10 cursor-pointer h-full';
  @Input() alt: string = 'Toggle button icon';
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit();
  }
}
