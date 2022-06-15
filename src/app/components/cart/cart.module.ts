import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module'; 
import { CartComponent } from './cart.component'; 
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
      FormsModule,
      CommonModule,
      CartRoutingModule,
    ],
    declarations: [ CartComponent ]
  })
  export class CartModule { }