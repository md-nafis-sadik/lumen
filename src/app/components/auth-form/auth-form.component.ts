import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LogoComponent } from '../../shared/components/logo/logo.component';
import { FormInputComponent } from '../../shared/components/form-input/form-input.component';
import { PasswordToggleInputComponent } from '../../shared/components/password-toggle-input/password-toggle-input.component';
import { SocialSigninButtonComponent } from '../../shared/components/social-signin-button/social-signin-button.component';
import { SubmitButtonComponent } from '../../shared/components/submit-button/submit-button.component';


@Component({
  selector: 'app-auth-form',
  imports: [CommonModule, FormsModule, LogoComponent, FormInputComponent, PasswordToggleInputComponent, SocialSigninButtonComponent, SubmitButtonComponent],
  standalone: true,
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css'
})
export class AuthFormComponent {
  email = '';
  password = '';
  showPassword = false;

  constructor(private router: Router) {}

  isFormValid(): boolean {
    return this.email.trim() !== '' && this.password.trim() !== '';
  }

  onSubmit() {
    if (this.isFormValid()) {
      this.router.navigate(['/dashboard']);
    }
  }
  }
