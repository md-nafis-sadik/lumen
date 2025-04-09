import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from '../../shared/components/auth-form/auth-form.component';
import { WelcomeSidebarComponent } from '../../shared/components/welcome-sidebar/welcome-sidebar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, AuthFormComponent, WelcomeSidebarComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {}