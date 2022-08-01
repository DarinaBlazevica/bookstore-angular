import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { map, Observable } from 'rxjs';
import { OrderItem } from '../order';
import { CartService } from './cart.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderDialogboxComponent } from '../components/order-dialogbox/order-dialogbox.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})

export class CheckoutService {
  @Input() showCheckout!: boolean;
  @Output() showCheckoutChange = new EventEmitter<boolean>();
  
  public userInfo;

  public checkoutOrderForm!: FormGroup;
  public orderItems = this.cartService.getItems();

  public orderUrl = 'http://localhost:3000/orders';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private httpClient: HttpClient,
    private cartService: CartService,
    public dialog: MatDialog, 
    private formBuilder: FormBuilder,
  ) {
    this.userInfo = this.checkoutOrderForm = this.formBuilder.group(
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

  getOrder(): Observable<OrderItem[]> {
    return this.httpClient.get<OrderItem[]>(this.orderUrl).pipe(
      map(() => {
        let orderItems: OrderItem[] = [];
        for (let item of this.orderItems) {
          orderItems.push(new OrderItem(item));
        }
        return orderItems;
      })
    );
  }

  fillOrder(): Observable<any> {
    const order = this.orderItems;
    const userInfo = [this.userInfo.get(['name'])?.value, this.userInfo.get(['user_email'])?.value]
    return this.httpClient.post(this.orderUrl, { order, userInfo }, this.httpOptions);
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

  getForm() {
    return this.checkoutOrderForm
  }
}
