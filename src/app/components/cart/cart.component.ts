import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public items = this.cartService.getItems();

  public totalPrice!: number;
  public quantity!: number;
  public showCheckoutForm = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.items = this.cartService.getItems();
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);
  }

  calculateTotalPrice() {
    let totalElementPrice = 0;
    this.items.forEach((element) => {
      totalElementPrice += element.price * element.qty;
    });
    return (this.totalPrice = totalElementPrice);
  }
}
