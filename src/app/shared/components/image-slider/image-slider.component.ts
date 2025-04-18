import { Component, OnInit, Input, OnDestroy, ElementRef, ViewChild } from '@angular/core';
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
  duration?: number;  // Optional duration for this slide
  autoPlay?: boolean; // Optional autoplay setting for this slide
}

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule, PrimaryButtonComponent],
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
})
export class ImageSliderComponent implements OnInit, OnDestroy {
  @Input() slides: Slide[] = [];
  @Input() autoPlay: boolean = true;  // Global autoPlay control (optional)
  @Input() interval: number = 5000;    // Default interval for autoplay (optional)

  @ViewChild('slider', { static: true }) slider!: ElementRef;

  activeSlide = 0;
  private autoPlayInterval: any;

  // Drag properties
  isDragging = false;
  startX = 0;
  currentTranslate = 0;
  prevTranslate = 0;
  animationID: any;
  threshold = 50;

  ngOnInit(): void {
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
    cancelAnimationFrame(this.animationID);
  }

  startAutoPlay(): void {
    this.autoPlayInterval = setInterval(() => {
      this.activeSlide = (this.activeSlide + 1) % this.slides.length;
      this.setPositionByIndex();
    }, this.interval);
  }

  stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  onMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.startX = event.clientX;
    this.stopAutoPlay();
    // Disable transitions during drag
    this.slider.nativeElement.style.transition = 'none';
    this.animationID = requestAnimationFrame(this.animate.bind(this));
  }

  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging) return;
    const currentX = event.clientX;
    const deltaX = currentX - this.startX;
    this.currentTranslate = this.prevTranslate + deltaX;
    this.setSliderPosition();
  }

  onMouseUp(): void {
    cancelAnimationFrame(this.animationID);
    this.isDragging = false;
    this.slider.nativeElement.classList.remove('dragging');

    const movedBy = this.currentTranslate - this.prevTranslate;
    if (movedBy < -this.threshold && this.activeSlide < this.slides.length - 1) {
      this.activeSlide++;
    } else if (movedBy > this.threshold && this.activeSlide > 0) {
      this.activeSlide--;
    }

    this.setPositionByIndex();

    if (this.autoPlay) {
      this.startAutoPlay();
    }
    this.setPositionByIndex();
  }

  onMouseLeave(): void {
    if (this.isDragging) this.onMouseUp();
  }

  animate(): void {
    this.setSliderPosition();
    if (this.isDragging) {
      this.animationID = requestAnimationFrame(this.animate.bind(this));
    }
  }

  setSliderPosition(): void {
    this.slider.nativeElement.style.transform = `translateX(-${this.activeSlide * 100}%) translateX(${this.currentTranslate - this.prevTranslate}px)`;
  }

  setPositionByIndex(): void {
    this.slider.nativeElement.style.transition = 'transform 0.5s ease';
    this.currentTranslate = 0;
    this.prevTranslate = -this.activeSlide * this.slider.nativeElement.offsetWidth;
    this.slider.nativeElement.style.transition = 'transform 0.5s ease';
    this.slider.nativeElement.style.transform = `translateX(-${this.activeSlide * 100}%)`;
    setTimeout(() => {
      this.slider.nativeElement.style.transition = '';
      this.prevTranslate = 0;
    }, 500);
  }

  goToSlide(index: number): void {
    this.activeSlide = index;
    this.setPositionByIndex();
  }
}
