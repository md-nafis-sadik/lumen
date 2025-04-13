import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from '../common/primary-button/primary-button.component';

interface Slide {
  title: string;
  highlight: string;
  description: string;
  buttonText: string;
  patternUrl: string;
  imageUrl: string;
  gradient?: string;
  textColor?: string;
  highlightColor?: string;
  buttonColor?: string;
  buttonHoverColor?: string;
  duration?: number; // Optional duration for this slide
  autoPlay?: boolean; // Optional autoplay setting for this slide
}

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule, PrimaryButtonComponent],
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
})
export class ImageSliderComponent implements OnInit {
  @Input() slides: Slide[] = [];
  @Input() autoPlay: boolean = true;  // Global autoPlay control (optional)
  @Input() interval: number = 5000;    // Default interval for autoplay (optional)

  activeSlide = 0;

  ngOnInit(): void {
    // Check if autoplay is enabled globally
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  startAutoPlay(): void {
    setInterval(() => {
      this.activeSlide = (this.activeSlide + 1) % this.slides.length;
    }, this.interval);
  }

  goToSlide(index: number): void {
    this.activeSlide = index;
  }
}
