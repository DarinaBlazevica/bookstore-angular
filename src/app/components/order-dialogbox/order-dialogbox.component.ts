import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order-dialogbox',
  templateUrl: './order-dialogbox.component.html',
  styleUrls: ['./order-dialogbox.component.css'],
})
export class OrderDialogboxComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { message: string; homepage: string },
    private router: Router,
    public dialogRef: MatDialogRef<OrderDialogboxComponent>,
    private cartService: CartService
  ) {}

  routeToMainPage() {
    this.router.navigate(['main']);
    this.dialogRef.close();
    this.cartService.clearCart();
  }
}
