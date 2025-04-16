import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-pickleball-booking-card',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './pickleball-booking-card.component.html',
  styleUrls: ['./pickleball-booking-card.component.css']
})
export class PickleballBookingCardComponent {
  countries = ['India', 'USA', 'Canada', 'Australia', 'Germany', 'Bangladesh'];
  cities = ['New Delhi', 'Mumbai', 'Bangalore', 'Chennai'];
  districts = ['Central', 'East', 'West', 'North', 'South'];
  
  selectedDate = new FormControl(new Date());
  countryControl = new FormControl();
  cityControl = new FormControl();
  districtControl = new FormControl();

  useMyLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log('Location:', position.coords);
      });
    }
  }
}