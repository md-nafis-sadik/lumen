import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '../../shared/components/login-form/login-form.component';
import { WelcomeSidebarComponent } from '../../shared/components/welcome-sidebar/welcome-sidebar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, LoginFormComponent, WelcomeSidebarComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  @ViewChild('signinForm', { static: true, read: ElementRef }) signinForm!: ElementRef;
    isOverflowing = false;
  
    ngAfterViewInit() {
      this.checkOverflow();
    }
  
    checkOverflow() {
      const el = this.signinForm.nativeElement;
      this.isOverflowing = el.scrollHeight > el.clientHeight;
    }
}