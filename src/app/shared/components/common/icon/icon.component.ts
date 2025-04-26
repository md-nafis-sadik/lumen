// icon.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
    templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',

  styles: [
    `
      .icon-wrapper {
        display: inline-flex;
        svg {
          width: 100%;
          height: 100%;
        }
      }
    `,
  ],
})
export class IconComponent {

  @Input() icon: 'user' | 'cart' | 'settings' | string = 'default';
  @Input() size: number = 1;
  @Input() color: string = 'currentColor';
  @Input() className: string = '';
}