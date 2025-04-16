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
  selector: 'app-signup-form',
  imports: [CommonModule, FormsModule, LogoComponent, FormInputComponent, PasswordToggleInputComponent, SocialSigninButtonComponent, SubmitButtonComponent],
  standalone: true,
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignUpFormComponent {
  email = '';
  phone = '';
  first_name = '';
  last_name = '';
  password = '';
  showPassword = false;

  constructor(private router: Router) {}

  isFormValid(): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+?[0-9]{10,15}$/;
    return (
      this.first_name.trim() !== '' &&
      this.last_name.trim() !== '' &&
      emailPattern.test(this.email) &&
      phonePattern.test(this.phone) &&
      this.password.trim().length >= 6
    );
  }
  

  onSubmit() {
    if (this.isFormValid()) {
      this.router.navigate(['/dashboard']);
    }
  }
  }
