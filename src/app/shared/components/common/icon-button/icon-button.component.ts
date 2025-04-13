import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css'],
  imports: [CommonModule]
})
export class IconButtonComponent {
  @Input() iconSrc: string = ''; // Icon source
  @Input() iconClass: string = ''; // Additional classes for styling
  @Output() click = new EventEmitter<void>();

  // Emit click event when the button is clicked
  onClick() {
    this.click.emit();
  }
}
