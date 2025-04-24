import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-court-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './court-details.component.html',
  styleUrl: './court-details.component.css'
})
export class CourtDetailsComponent {
  court: any;
  isDetailsOn = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.selectedCourt$.subscribe(court => {
      this.court = court;
    });

    this.sharedService.isDetailsOn$.subscribe(status => {
      this.isDetailsOn = status;
    });
  }

  closeModal() {
    this.sharedService.closeCourtDetails();
  }

  getStarWidth(star: number): string {
    switch (star) {
      case 5: return '100%';
      case 4: return '60%';
      case 3: return '30%';
      case 2: return '20%';
      case 1: return '10%';
      default: return '0%';
    }
  }
}
