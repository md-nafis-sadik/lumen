import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '../../shared/components/login-form/login-form.component';
import { WelcomeSidebarComponent } from '../../shared/components/welcome-sidebar/welcome-sidebar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, LoginFormComponent, WelcomeSidebarComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {}