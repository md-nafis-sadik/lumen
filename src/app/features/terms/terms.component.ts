import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css'
})
export class TermsComponent {
  constructor(private location: Location) {}

goBack(): void {
  this.location.back();
}
}
