import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../layouts/header/header.component';
import { SidebarComponent } from '../../layouts/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ImageSliderComponent } from '../../shared/components/image-slider/image-slider.component';
import { PickleballBookingCardComponent } from '../../shared/components/pickleball-booking-card/pickleball-booking-card.component';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, SidebarComponent, ImageSliderComponent, PickleballBookingCardComponent, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  sidebarOpen = true;
sidebarVisible = true;
showSlider = true;

toggleSidebar() {
  if (this.sidebarOpen) {
    this.sidebarOpen = false;

    // Wait for animation to finish before hiding completely
    setTimeout(() => {
      this.sidebarVisible = false;
    }, 700); // match Tailwind's duration-700
  } else {
    this.sidebarVisible = true;

    // Allow DOM to render sidebar before applying open class
    setTimeout(() => {
      this.sidebarOpen = true;
    }, 10);
  }
}

  

  sliderSlides = [
    {
      title: 'Play More,',
      highlight: 'Search Less!',
      description: 'Reserve your favourite pickleball court effortlessly.',
      buttonText: 'Learn more',
      patternUrl: 'assets/patterns/Vector.svg',
      imageUrl: 'assets/images/2025/girl-playing.png',
      gradient: 'circle at top right, #118a9f, #07282e',
      textColor: 'text-white',
      highlightColor: 'text-[#06ACCE]',
      buttonColor: '#06ACCE',
      buttonHoverColor: '#0799B7',
    },
    {
      title: 'Join the Game,',
      highlight: 'Win the Fun!',
      description: 'Find and book top-rated pickleball courts near you.',
      buttonText: 'Get Started',
      patternUrl: 'assets/patterns/Vector.svg',
      imageUrl: 'assets/images/2025/girl-playing.png',
      gradient: 'circle at top right, #1e3c72, #2a5298',
      textColor: 'text-black',
      highlightColor: 'text-green-400',
      buttonColor: '#06ACCE',
      buttonHoverColor: '#0799B7',
    },
    {
      title: 'Play More,',
      highlight: 'Search Less!',
      description: 'Reserve your favourite pickleball court effortlessly.',
      buttonText: 'Learn more',
      patternUrl: 'assets/patterns/Vector.svg',
      imageUrl: 'assets/images/2025/girl-playing.png',
      gradient: 'circle at top right, #118a9f, #07282e',
      textColor: 'text-white',
      highlightColor: 'text-[#06ACCE]',
      buttonColor: '#06ACCE',
      buttonHoverColor: '#0799B7',
    },
  ];
  

  userInput = '';
messages: { sender: 'user' | 'bot', content: string, type: 'text' | 'booking' }[] = [];

sendMessage() {
  const trimmed = this.userInput.trim();
  if (!trimmed) return;

  // Push user message
  this.messages.push({ sender: 'user', content: trimmed, type: 'text' });

  // Reset input
  this.userInput = '';
  this.showSlider = false;

  // Handle response
  setTimeout(() => {
    if (trimmed.toLowerCase().includes('book') && trimmed.toLowerCase().includes('pickleball')) {
      this.messages.push({ sender: 'bot', content: '', type: 'booking' });
    } else {
      this.messages.push({ sender: 'bot', content: "I'm here to help!", type: 'text' });
    }
  }, 300);
}
}


