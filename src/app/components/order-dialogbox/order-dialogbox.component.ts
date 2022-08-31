import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OrderItem } from 'src/app/order';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-order-dialogbox',
  templateUrl: './order-dialogbox.component.html',
  styleUrls: ['./order-dialogbox.component.css'],
})
export class OrderDialogboxComponent implements OnInit {
  
  public items: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { message: string; homepage: string },
    private router: Router,
    public dialogRef: MatDialogRef<OrderDialogboxComponent>,
    private cartService: CartService,
    private checkoutService: CheckoutService
  ) {}

  ngOnInit() {
    this.handleFillOrder();
    this.getOrder();
  }

  handleFillOrder() {
    this.checkoutService.fillOrder().subscribe();
  }

  getOrder() {
    this.checkoutService.getOrder().subscribe((orderItems: OrderItem[]) => {
      this.items = orderItems;
    });
  }

  routeToMainPage() {
    this.router.navigate(['main']);
    this.dialogRef.close();
    this.cartService.clearCart();
    this.checkoutService.resetForm();
  }
}
