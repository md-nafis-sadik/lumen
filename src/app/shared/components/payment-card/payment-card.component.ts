import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-payment-card',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './payment-card.component.html',
  styleUrl: './payment-card.component.css'
})
export class PaymentCardComponent {
@Input() step: number = 0;
  @Input() isExpanded = true;


  paymentForm;

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      holderName: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{4} \d{4} \d{4} \d{4}$/)]],
      expiry: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      cvc: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
      saveCard: [false],
    });
  }

  selectedMethod = 'card';

  selectMethod(method: string) {
    this.selectedMethod = method;
  }

  get f() {
    return this.paymentForm.controls;
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      console.log(this.paymentForm.value);
    }
  }
}
