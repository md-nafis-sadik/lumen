import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IconComponent } from '../common/icon/icon.component';


@Component({
  selector: 'app-payment-completed',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IconComponent],
  templateUrl: './payment-completed.component.html',
  styleUrl: './payment-completed.component.css'
})
export class PaymentCompletedComponent {
@Input() step: number = 0;
  @Input() isExpanded = false;


}
