import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private selectedCourtSubject = new BehaviorSubject<any>(null);
  selectedCourt$ = this.selectedCourtSubject.asObservable();

  private isDetailsOnSubject = new BehaviorSubject<boolean>(false);
  isDetailsOn$ = this.isDetailsOnSubject.asObservable();

  setSelectedCourt(court: any) {
    this.selectedCourtSubject.next(court);
  }

  toggleCourtDetails() {
    this.isDetailsOnSubject.next(!this.isDetailsOnSubject.value);
  }

  closeCourtDetails() {
    this.isDetailsOnSubject.next(false);
  }
}
