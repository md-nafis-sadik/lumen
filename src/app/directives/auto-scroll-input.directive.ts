import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAutoScrollInput]',
  standalone: true,
})
export class AutoScrollInputDirective {
  private lastHeight = window.innerHeight;

  constructor(private el: ElementRef) {}

  private isMobile(): boolean {
    // Check if the device width is less than or equal to 768px (common breakpoint for mobile devices)
    return window.innerWidth <= 768;
  }

  private shouldScroll(): boolean {
    return window.innerHeight !== this.lastHeight;
  }

  @HostListener('focus')
  onFocus() {
    if (this.isMobile()) {
      document.body.classList.add('focused-input');

      // Delay the scroll to allow the mobile keyboard to open
      setTimeout(() => {
        // Check if the keyboard has opened by comparing the height of the viewport
        if (this.shouldScroll()) {
          this.el.nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      }, 300); // Delay for 300ms to give the keyboard some time to open
    }
  }

  @HostListener('blur')
  onBlur() {
    document.body.classList.remove('focused-input');
  }

  @HostListener('click')
  onClick() {
    console.log('ehll');
    if (this.isMobile()) {
      document.body.classList.add('focused-input');

      // Delay the scroll to allow the mobile keyboard to open
      setTimeout(() => {
        // Check if the keyboard has opened by comparing the height of the viewport
        if (this.shouldScroll()) {
          this.el.nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      }, 300); // Delay for 300ms to give the keyboard some time to open
    }
  }
}
