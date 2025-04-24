import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-payment-completed',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './payment-completed.component.html',
  styleUrl: './payment-completed.component.css'
})
export class PaymentCompletedComponent {
@Input() step: number = 0;
  @Input() isExpanded = false;


}
