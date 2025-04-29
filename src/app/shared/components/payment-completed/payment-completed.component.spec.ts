import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCompletedComponent } from './payment-completed.component';

describe('PaymentCardComponent', () => {
  var component: PaymentCompletedComponent;
  var fixture: ComponentFixture<PaymentCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentCompletedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
