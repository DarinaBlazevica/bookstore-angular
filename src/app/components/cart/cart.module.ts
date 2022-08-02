import { NgModule } from '@angular/core';
import { CartRoutingModule } from './cart-routing.module'; 
import { CartComponent } from './cart.component'; 
import { CheckoutComponent } from '../checkout/checkout.component';
import { OrderDialogboxComponent } from '../order-dialogbox/order-dialogbox.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    imports: [   
      SharedModule,
      CartRoutingModule,
    ],
    declarations: [ CartComponent, CheckoutComponent, OrderDialogboxComponent ]
  })
  export class CartModule { }