// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';

import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [], // Keep empty if all components are standalone
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ClickOutsideDirective,
    MatSelectCountryModule.forRoot('en'),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent] // Add this to bootstrap the root component
})
export class AppModule { }