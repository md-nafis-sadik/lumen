import { Component, Input } from '@angular/core';
import { SocialIcon } from '../../../../models/icon.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-social-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-icon.component.html',
  styleUrls: ['./social-icon.component.css']
})
export class SocialIconComponent {
  @Input() icons: SocialIcon[] = [];

  // Optional: A method to apply custom color, if needed
  getIconClass(icon: SocialIcon): string {
    return icon.className || '';  // Returning FontAwesome class if it's defined
  }

  getSvgPath(icon: SocialIcon): string {
    return icon.svgPath || '';  // Returning SVG path if it's defined
  }

  getIconStyle(icon: SocialIcon): string {
    // Add your logic here if you want to add styles like color
    return icon.color ? `filter: hue-rotate(${icon.color}deg);` : '';  // Example for dynamic color change
  }
}
