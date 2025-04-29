import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickleballBookingCardComponent } from './pickleball-booking-card.component';

describe('PickleballBookingCardComponent', () => {
  var component: PickleballBookingCardComponent;
  var fixture: ComponentFixture<PickleballBookingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickleballBookingCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickleballBookingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
