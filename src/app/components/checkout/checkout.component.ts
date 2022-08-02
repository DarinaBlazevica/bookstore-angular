import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  @Input() showCheckout!: boolean;
  @Output() showCheckoutChange = new EventEmitter<boolean>();

  public checkoutOrderForm!: FormGroup;

  constructor(
    public dialog: MatDialog,
    private checkoutService: CheckoutService
  ) {
    this.checkoutOrderForm = this.checkoutService.getForm();
  }

  get userData() {
    return this.checkoutOrderForm.controls;
  }

  toggleOrderDialog() {
    this.checkoutService.toggleOrderDialog();
  }

  toggleCheckoutForm() {
    this.checkoutService.toggleCheckoutForm();
  }
}
