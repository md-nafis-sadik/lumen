// pickleball-booking-card.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Country, State, City } from 'country-state-city';
import { CalendarModule } from 'primeng/calendar';
import { SubmenuService } from '../../../services/submenu.service';

@Component({
  selector: 'app-pickleball-booking-card',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule, // Added FormsModule for ngModel
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule, 
    CalendarModule
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
  date: Date[] | undefined;
  selectedDateText = '';
  searchTerm = '';
  dateControl = new FormControl();
  dateisSelected = false;
  isSlotSelected = false;
  selectedDate = new FormControl();
  countryControl = new FormControl();
  stateControl = new FormControl();
  cityControl = new FormControl();
  step = 0;

  onNextClick(){
    console.log(this.step);
    if (this.step < 4) {
      this.step = this.step+ 1;
    }
  }

  onPreviousClick() {
    if (this.step > 0) {
      this.step = this.step - 1;
    }
  }

  selectedShift: 'day' | 'evening' = 'day';
  selectedSlot: string | null = null;

  constructor(
    private submenuService: SubmenuService,
  ){

  }

  daySlots = [
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 1:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
  ];

  eveningSlots = [
    '5:00 PM - 6:00 PM',
    '6:00 PM - 7:00 PM',
    '7:00 PM - 8:00 PM',
    '8:00 PM - 9:00 PM',
    '9:00 PM - 10:00 PM',
  ];

  useMyLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log('Location:', position.coords);
      });
    }
  }

  onDateSelected(event: Date) {
    this.dateControl.setValue(event);
    this.selectedDateText = event.toDateString();
    this.selectedSlot = null; // Reset slot on date change
    this.dateisSelected = true;
  }

  onShiftSelected(shift: 'day' | 'evening') {
    this.selectedShift = shift;
    this.selectedSlot = null;
  }

  onSlotSelected(slot: string) {
    this.selectedSlot = slot;
    this.isSlotSelected =true;
  }

  openLocationSelectModal() {
    this.submenuService.openLocationSelectModal();
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
    // Check if country has no states, fetch cities directly
    if (this.states.length === 0) {
      this.cities = City.getCitiesOfCountry(country.isoCode) || [];
      

    } else {
      this.cities = [];
    }
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

  selectCountry() {
    this.countryControl.reset();
    this.stateControl.reset();
    this.cityControl.reset();
    this.states = [];
    this.cities = [];
    this.searchTerm = '';
  }

  selectState() {
    this.stateControl.reset();
    this.cityControl.reset();
    this.cities = [];
    this.searchTerm = '';
  }

  selectCity() {
    this.cityControl.reset();
    this.searchTerm = '';
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  get currentStep() {
    if (!this.countryControl.value) return 'country';
    if (this.states.length > 0 && !this.stateControl.value) return 'state';
    if (this.cities.length > 0 && !this.cityControl.value) return 'city';
    return 'date';
  }

  getCountryCode(country: any): string {
    return country.isoCode.toLowerCase();
  }

  isNextEnabled(): boolean {
    switch (this.currentStep) {
      case 'country':
        return !!this.countryControl.value;
      case 'state':
        return !!this.stateControl.value;
      case 'city':
        return !!this.cityControl.value;
      case 'date':
        return !!this.dateControl.value;
      default:
        return false;
    }
  }






    arenas = [
      {
        name: 'Gd Goenka Sports Arena',
        location: 'Vananat Kunj, Delhi',
        rating: 4.0,
        reviews: 742,
        distance: '2.0 km',
        maxPlayers: 4,
        type: 'Indoor',
        features: ['Floodlights Available'],
        price: 999,
        discount: 20,
        image: 'assets/images/courts/court1.png',
        badgeColor: 'bg-orange-100',
        badgeIcon: 'assets/images/badges/badge-private.png',
      },
      {
        name: 'Rackonnect Exclusive Padel Pickle Park (reppp)',
        location: 'Ladha Sarai Village, Delhi',
        rating: 4.6,
        reviews: 742,
        distance: '2.0 km',
        maxPlayers: 4,
        type: 'Outdoor',
        features: ['Wind barries', 'Indoor', 'Floodlights Available'],
        price: 999,
        discount: 20,
        image: 'assets/images/courts/court2.png',
        badgeColor: 'bg-green-100',
        badgeIcon: 'assets/images/badges/badge-private.png',
      },
    ];

  
    monthDates: Date[] = [];
showSlotDropdown = false;

ngOnInit(): void {
  this.generateMonthDates();
}

generateMonthDates(): void {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  this.monthDates = Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1));
}

isSameDay(d1: Date, d2: Date): boolean {
  return (
    d1 &&
    d2 &&
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear()
  );
}

toggleSlotDropdown(): void {
  this.showSlotDropdown = !this.showSlotDropdown;
}


}