import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/interface/cartItems';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-order-dialogbox',
  templateUrl: './order-dialogbox.component.html',
  styleUrls: ['./order-dialogbox.component.css'],
})
export class OrderDialogboxComponent implements OnInit {
  public items: any[] = [];
  public cartItem!: CartItem;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { message: string; homepage: string },
    private router: Router,
    public dialogRef: MatDialogRef<OrderDialogboxComponent>,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.clearCart();
  }

  routeToMainPage() {
    this.router.navigate(['main']);
    this.dialogRef.close();
    this.clearCart();
  }

  clearCart() {
    this.cartService.clearCart().subscribe();
  }
}
