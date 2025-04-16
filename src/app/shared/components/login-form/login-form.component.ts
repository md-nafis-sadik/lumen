import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, Validators, FormGroup, FormControl } from '@angular/forms';
import { LogoComponent } from '../common/logo/logo.component';
import { PasswordToggleInputComponent } from '../common/password-toggle-input/password-toggle-input.component';
import { SocialSigninButtonComponent } from '../common/social-signin-button/social-signin-button.component';
import { SubmitButtonComponent } from '../common/submit-button/submit-button.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LogoComponent,
    PasswordToggleInputComponent,
    SocialSigninButtonComponent,
    SubmitButtonComponent
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  email = '';
  password = '';
  checked = false;
  emailTouched = false;
  passwordTouched = false;

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
    this.emailTouched = true;
    this.passwordTouched = true;

    if (this.isFormValid()) {
      this.router.navigate(['/dashboard']);
    }
  }
}
