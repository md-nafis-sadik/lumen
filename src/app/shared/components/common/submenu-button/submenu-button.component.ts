import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-submenu-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './submenu-button.component.html',
  styleUrls: ['./submenu-button.component.css']
})
export class SubmenuButtonComponent {
  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() isActive: boolean = false;
  @Input() activeRingColor: string = 'mint-200';
  @Input() textColor: string = '#000000';
  @Input() activeBackgroundColor: string = 'rgba(155, 222, 235, 0.15)';
  hoverRingColor: string = 'blue-500';

  @Output() buttonClick = new EventEmitter<void>();

  handleClick() {
    this.buttonClick.emit();
  }
}
