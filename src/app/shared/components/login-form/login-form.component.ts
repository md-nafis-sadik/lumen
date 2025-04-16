import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LogoComponent } from '../common/logo/logo.component';
import { FormInputComponent } from '../common/form-input/form-input.component';
import { PasswordToggleInputComponent } from '../common/password-toggle-input/password-toggle-input.component';
import { SocialSigninButtonComponent } from '../common/social-signin-button/social-signin-button.component';
import { SubmitButtonComponent } from '../common/submit-button/submit-button.component';

@Component({
  selector: 'app-login-form',
  imports: [CommonModule, FormsModule, LogoComponent, FormInputComponent, PasswordToggleInputComponent, SocialSigninButtonComponent, SubmitButtonComponent],
  standalone: true,
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  email = '';
  password = '';
  showPassword = false;
  emailTouched = false;
  passwordTouched = false;
  checked = false;

  constructor(private router: Router) {}

  isFormValid(): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,}$/i;
    return this.email.trim() !== '' && 
           this.password.trim() !== '' && 
           emailPattern.test(this.email);
  }

  onEmailBlur() {
    this.emailTouched = true;
  }

  onPasswordBlur() {
    this.passwordTouched = true;
  }

  onSubmit() {
    // Mark both fields as touched when submitting
    this.emailTouched = true;
    this.passwordTouched = true;
    
    if (this.isFormValid()) {
      this.router.navigate(['/dashboard']);
    }
  }
}