// pickleball-booking-card.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { SearchInputComponent } from '../common/search-input/search-input.component';
import { Country, State, City } from 'country-state-city';


@Component({
  selector: 'app-pickleball-booking-card',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    SearchInputComponent,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './pickleball-booking-card.component.html',
  styleUrls: ['./pickleball-booking-card.component.css']
})
export class PickleballBookingCardComponent {
  isExpanded = false;
  countries = Country.getAllCountries();
  states: any[] = [];
  cities: any[] = [];
  searchTerm = '';

  selectedDate = new FormControl();
  countryControl = new FormControl();
  stateControl = new FormControl();
  cityControl = new FormControl();

  useMyLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log('Location:', position.coords);
      });
    }
  }

  get filteredCountries() {
    return this.countries.filter(c => 
      c.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  get filteredStates() {
    return this.states.filter(s => 
      s.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  get filteredCities() {
    return this.cities.filter(c => 
      c.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onCountrySelected(country: any) {
    this.countryControl.setValue(country);
    this.states = State.getStatesOfCountry(country.isoCode);
    this.stateControl.reset();
    this.cityControl.reset();
    this.searchTerm = '';
  }

  onStateSelected(state: any) {
    this.stateControl.setValue(state);
    this.cities = City.getCitiesOfState(
      this.countryControl.value.isoCode, 
      state.isoCode
    );
    this.cityControl.reset();
    this.searchTerm = '';
  }

  onCitySelected(city: any) {
    this.cityControl.setValue(city);
    this.searchTerm = '';
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  get currentStep() {
    if (!this.countryControl.value) return 'country';
    if (!this.stateControl.value) return 'state';
    if (!this.cityControl.value) return 'city';
    return 'date';
  }

  getCountryCode(country: any): string {
    return country.isoCode.toLowerCase();
  }

  getFlagPath(code: string): string {
    return `node_modules/flag-icons/flags/4x3/${code}.svg`;
  }
}