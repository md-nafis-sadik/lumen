import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

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


  private isExpansionOnSource = new BehaviorSubject<boolean>(true);
  isExpansionOn$ = this.isExpansionOnSource.asObservable();

  private isExpandedSource = new BehaviorSubject<boolean>(false);
  isExpanded$ = this.isExpandedSource.asObservable();

  private _initialBookingSent = false;

  setInitialBookingSent(value: boolean) {
    this._initialBookingSent = value;
  }

  getInitialBookingSent(): boolean {
    return this._initialBookingSent;
  }

  setIsExpansionOn(state: boolean) {
    this.isExpansionOnSource.next(state);
  }

  setIsExpanded(state: boolean) {
    this.isExpandedSource.next(state);
  }

  getIsExpanded(): boolean {
    return this.isExpandedSource.getValue();
  }

  private sidebarOpenSource = new BehaviorSubject<boolean>(false);
  sidebarOpen$ = this.sidebarOpenSource.asObservable();

  isSidebarOpen(state: boolean) {
    this.sidebarOpenSource.next(state);
  }

  private nextStepSource = new Subject<void>();
  nextStep$ = this.nextStepSource.asObservable();

  triggerNextStep() {
    this.nextStepSource.next();
  }
}
