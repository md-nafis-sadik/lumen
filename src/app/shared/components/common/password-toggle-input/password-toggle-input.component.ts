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
  @Input() autocomplete: string = '';

  showPassword: boolean = false;

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
}
