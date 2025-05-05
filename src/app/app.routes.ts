import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { SignUpComponent } from './features/signup/signup.component';
import { TermsComponent } from './features/terms/terms.component';

// Define your routes here
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'terms', component: TermsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },  
];
