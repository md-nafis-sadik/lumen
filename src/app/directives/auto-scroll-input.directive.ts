import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAutoScrollInput]',
  standalone: true, // 👉 ADD THIS
})
export class AutoScrollInputDirective {
  constructor(private el: ElementRef) {}

  private isMobile(): boolean {
    return window.innerWidth <= 768;
  }

  @HostListener('focus')
  onFocus() {
    if (!this.isMobile())
      return document.body.classList.remove('focused-input');
    document.body.classList.add('focused-input');
    setTimeout(() => {
      this.el.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }, 300);
  }

  @HostListener('click')
  onClick() {
    if (!this.isMobile())
      return document.body.classList.remove('focused-input');
    document.body.classList.add('focused-input');
    setTimeout(() => {
      this.el.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }, 300);
  }

  @HostListener('blur')
  onBlur() {
    document.body.classList.remove('focused-input');
  }
}
