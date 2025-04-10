import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Slide {
  title: string;
  highlight: string;
  description: string;
  buttonText: string;
  imageUrl: string;
}

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],

})
export class ImageSliderComponent implements OnInit {
  slides: Slide[] = [
    {
      title: 'Play More,',
      highlight: 'Search Less!',
      description: 'Reserve your favourite pickleball court effortlessly.',
      buttonText: 'Learn more',
      imageUrl: 'assets/images/2025/girl-playing.png'
    },
    {
      title: 'Join the Game,',
      highlight: 'Win the Fun!',
      description: 'Find and book top-rated pickleball courts near you.',
      buttonText: 'Get Started',
      imageUrl: 'assets/images/2025/girl-playing.png'
    }
  ];

  activeSlide = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.activeSlide = (this.activeSlide + 1) % this.slides.length;
    }, 5000); // every 5s
  }

  goToSlide(index: number): void {
    this.activeSlide = index;
  }
}
