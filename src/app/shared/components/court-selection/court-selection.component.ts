import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-court-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './court-selection.component.html',
  styleUrl: './court-selection.component.css'
})
export class CourtSelectionComponent {
  @Input() step: number = 0;
  @Input() isExpanded = false;
  monthDates: Date[] = [];
  @Input() selectedDateControl!: FormControl<Date | null>;
  @Input() selectedSlot: string | null = null;
  @Input() daySlots: string[] = [];
  @Input() eveningSlots: string[] = [];
  @Input() selectedShift: 'day' | 'evening' = 'day';
  @Input() onSlotSelected!: (slot: string) => void;
  @Input() onDateSelected!: (event: Date) => void;
  @Input() date: Date[] | undefined;
  

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;


  showSlotDropdown = false;

  toggleSlotDropdown(): void {
    this.showSlotDropdown = !this.showSlotDropdown;
  }
  isSameDay(d1: Date, d2: Date | null): boolean {
    if (!d1 || !d2) return false;
    return (
      d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getFullYear() === d2.getFullYear()
    );
  }

  selectDate(date: Date): void {
    if (this.selectedDateControl) {
      this.selectedDateControl.setValue(date); // update the FormControl in child
    }
    if (this.onDateSelected) {
      this.onDateSelected(date); // call the parent callback
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
      maxPlayersImg: 'assets/icons/person-icon-white.svg',
      type: 'Indoor',
      typeImg: 'assets/icons/home-gray-icon.svg',
      feature: 'Floodlights Available',
      featureImg: 'assets/icons/tubelight-icon.svg',
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
      maxPlayersImg: 'assets/icons/person-icon-white.svg',
      type: 'Indoor',
      typeImg: 'assets/icons/home-gray-icon.svg',
      feature: 'Floodlights Available',
      featureImg: 'assets/icons/tubelight-icon.svg',
      price: 999,
      discount: 20,
      image: 'assets/images/courts/court2.png',
      badgeColor: 'bg-green-100',
      badgeIcon: 'assets/images/badges/badge-private.png',
    },
  ];





  ngOnInit(): void {
    this.generateMonthDates();

    // Listen to external changes in selectedDateControl
    if (this.selectedDateControl) {
      this.selectedDateControl.valueChanges.subscribe(value => {
        // Trigger change detection to update styles
        // (no-op here, but forces re-render)
      });
    }

    const start = new Date();
    for (let i = -3; i <= 10; i++) {
      const date = new Date();
      date.setDate(start.getDate() + i);
      this.monthDates.push(date);
    }
  }

  generateMonthDates(): void {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    this.monthDates = Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1));
  }


  isToday(date: Date): boolean {
    const today = new Date();
    return this.isSameDay(today, date);
  }



  scrollLeft() {
    this.scrollContainer.nativeElement.scrollLeft -= 100;
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollLeft += 100;
  }
}
