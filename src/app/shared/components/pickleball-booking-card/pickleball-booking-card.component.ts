// pickleball-booking-card.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { SearchInputComponent } from '../common/search-input/search-input.component';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-pickleball-booking-card',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,

    FormsModule,
    ReactiveFormsModule,
    SearchInputComponent,
    MatSelectCountryModule, HttpClientModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './pickleball-booking-card.component.html',
  styleUrls: ['./pickleball-booking-card.component.css']
})
export class PickleballBookingCardComponent {
  countries = ['Argentina', 'Australia', 'Bangladesh', 'Canada', 'India', 'Germany'];
  cities: string[] = []; // Initialize as empty
  districts: string[] = []; // Initialize as empty
  
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
  countrySearch = '';

filteredCountries() {
  return this.countries.filter(c =>
    c.toLowerCase().includes(this.countrySearch.toLowerCase())
  );
}

selectCountry(country: string) {
  this.countryControl.setValue(country);
}



}