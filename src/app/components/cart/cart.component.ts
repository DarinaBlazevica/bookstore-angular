import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interface/books';
import { CartItem } from 'src/app/interface/cartItems';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public items: any[] = [];

  public totalPrice!: number;
  public quantity!: number;
  public showCheckoutForm = false;

  constructor(
    private cartService: CartService,
    private msgService: MessengerService
  ) {}

  ngOnInit(): void {
    this.handleSubscription();
    this.getItems();
  }

  handleSubscription() {
    this.msgService.getMsg().subscribe(() => {
      this.getItems();
      this.calculateTotalPrice();
    });
  }

  getItems() {
    this.cartService.getItems().subscribe((cartItems: CartItem[]) => {
      this.items = cartItems;
    });
  }
  removeItem(cartItem: CartItem): void {
    this.items = this.items.filter((item) => item !== cartItem);
    this.cartService.removeItem(cartItem.id).subscribe();
  }

  calculateTotalPrice() {
    let totalElementPrice = 0;
    this.items.forEach((element) => {
      totalElementPrice += element.price * element.qty;
    });

    return (this.totalPrice = totalElementPrice);
  }
}
