import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module'; 
import { CartComponent } from './cart.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from '../checkout/checkout.component';
import { MatDialogModule } from '@angular/material/dialog';
import { OrderDialogboxComponent } from '../order-dialogbox/order-dialogbox.component';

@NgModule({
    imports: [
      ReactiveFormsModule,
      FormsModule,
      CommonModule,
      CartRoutingModule,
      MatDialogModule, 
    ],
    declarations: [ CartComponent, CheckoutComponent, OrderDialogboxComponent ]
  })
  export class CartModule { }