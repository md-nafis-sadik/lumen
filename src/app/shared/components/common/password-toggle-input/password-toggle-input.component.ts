import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-toggle-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './password-toggle-input.component.html',
  styleUrls: ['./password-toggle-input.component.css'],
})
export class PasswordToggleInputComponent {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  @Input() placeholder: string = 'Enter your password';
  @Input() name: string = 'password';
  @Input() label?: string;
  @Input() autocomplete: string = '';
  @Input() showStrength: boolean = false;

  showPassword = false;
  passwordTouched = false;
  strengthLevel = 0;

  requirements = {
    symbol: false,
    uppercase: false,
    lowercase: false,
    number: false,
    minLength: false,
  };

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onPasswordChange(password: string): void {
    this.value = password;
    this.valueChange.emit(password);

    this.passwordTouched = password.length > 0;

    if (this.showStrength) {
      this.validatePassword(password);
    }
  }

  validatePassword(password: string): void {
    this.requirements = {
      symbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      minLength: password.length >= 8,
    };

    this.strengthLevel = Object.values(this.requirements).filter(Boolean).length;
  }
}
