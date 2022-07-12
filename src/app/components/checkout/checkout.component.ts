import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { OrderDialogboxComponent } from '../order-dialogbox/order-dialogbox.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  @Input() showCheckout!: boolean;
  @Output() showCheckoutChange = new EventEmitter<boolean>();

  checkoutOrderForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) {
    this.checkoutOrderForm = this.formBuilder.group(
      {
        user_email: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.com$'),
        ]),

        confirm_email: new FormControl('', [Validators.required]),

        name: new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-zA-Z]{2,40}(?: +[a-zA-Z]{2,40})+$'),
        ]),
      },
      {
        validators: this.EmailMatch('user_email', 'confirm_email'),
      }
    );
  }

  ngOnInit(): void {}

  get userData() {
    return this.checkoutOrderForm.controls;
  }

  EmailMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors['EmailMatch']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ EmailMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  toggleCheckoutForm() {
    this.showCheckout = false;
    this.showCheckoutChange.emit(this.showCheckout);
  }

  toggleOrderDialog() {
    this.dialog.open(OrderDialogboxComponent, {
      data: {message: "Thank you for your order!" , homepage: "Homepage"} })
  }
}
