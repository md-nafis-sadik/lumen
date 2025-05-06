import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeSidebarComponent } from '../../shared/components/welcome-sidebar/welcome-sidebar.component';
import { SignUpFormComponent } from '../../shared/components/signup-form/signupform.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, SignUpFormComponent, WelcomeSidebarComponent],
  templateUrl: './signup.component.html',
})
export class SignUpComponent {

  @ViewChild('signupForm', { static: true, read: ElementRef }) signupForm!: ElementRef;
  isOverflowing = false;

  ngAfterViewInit() {
    this.checkOverflow();
  }

  checkOverflow() {
    const el = this.signupForm.nativeElement;
    this.isOverflowing = el.scrollHeight > el.clientHeight;
  }
}