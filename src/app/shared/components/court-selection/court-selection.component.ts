import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CourtDetailsComponent } from '../court-details/court-details.component';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-court-selection',
  standalone: true,
  imports: [CommonModule, CourtDetailsComponent],
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


  constructor(private sharedService: SharedService) {}

  onCourtClick(court: any) {
    this.sharedService.setSelectedCourt(court);
    this.sharedService.toggleCourtDetails();
  }

  showSlotDropdown = false;
  isDetailsOn = false;


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
      coverImg: 'assets/images/court-details/court1-cover.png',
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
  
      // 🔽 Newly added fields
      audienceCapacity: 30,
      isEquipmentAvailable: true,
      surface: 'Synthetic Surface',
      floodlights: true,
      amenities: [
        'Floodlights Available',
        'Synthetic Surface',
        'Drinking Water',
        'Restrooms',
        'Seating Area'
      ],
      rules: [
        'Non marking shoes are recommended.',
        'Follow the maximum capacity rules.',
        'No food or drinks on court.'
      ],
      gallery: [
        'https://plus.unsplash.com/premium_photo-1709932755189-296b6a42de34?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1686721135030-e2ab79e27b16?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1693142518247-721cd8c73f88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1693142518820-78d7a05f1546?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1693142518820-78d7a05f1546?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1693142518820-78d7a05f1546?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        // More images...
      ],
      reviewsData: [
        {
          name: 'Alex Johnson',
          date: '20/02/2025',
          rating: 4.5,
          text: 'Well maintained courts and good lighting.'
        }
      ],
      contact: {
        phone: '+91 99999 11111',
        email: 'goenka.sports@email.com',
        closedDays: ['Sunday']
      }
    },
    {
      name: 'Rackonnect Exclusive Padel Pickle Park (reppp)',
      location: 'Ladha Sarai Village, Delhi',
      rating: 4.6,
      reviews: 742,
      distance: '2.0 km',
      coverImg: 'assets/images/gallery/goenka1.png',
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
  
      // 🔽 Newly added fields
      audienceCapacity: 20,
      isEquipmentAvailable: true,
      surface: 'Synthetic Surface',
      floodlights: true,
      amenities: [
        'Floodlights Available',
        'Synthetic Surface',
        'Seating Area',
        'Drinking Water',
        'Restrooms',
        'Café Available',
        'Nearby Gym Access'
      ],
      rules: [
        'Non marking shoes are recommended not mandatory for pickleball.',
        'A maximum number of members per booking per pickleball court is admissible.',
        'No pets, no seeds, no gum, no glass, no hitting or swinging outside of the cage.'
      ],
      gallery: [
        'assets/images/gallery/reppp1.png',
        'assets/images/gallery/reppp2.png',
        'assets/images/gallery/reppp3.png',
      ],
      reviewsData: [
        {
          name: 'Kathryn Murphy',
          date: '08/03/2025',
          rating: 5.0,
          text: 'Very convenient and fun place for both friendly and competitive matches!'
        },
        {
          name: 'Brooklyn Simmons',
          date: '01/03/2025',
          rating: 4.9,
          text: 'The courts are well-maintained, and the booking process is super smooth.'
        }
      ],
      contact: {
        phone: '+91 98765 43210',
        email: 'rohan.sharma@email.com',
        closedDays: ['Friday', 'Saturday']
      }
    }
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
