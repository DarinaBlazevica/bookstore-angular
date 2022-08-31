import { Injectable } from '@angular/core';
import { Book } from 'src/app/books';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public items: Book[] = [];

  constructor() {}

  addToCart(book: Book): Book[] {
    let existsInCart = false;

    for (let i in this.items) {
      if (this.items[i].id === book.id) {
        this.items[i].qty += book.qty;
        existsInCart = true;
      }
    }

    if (!existsInCart) {
      this.items.push(book);
    }
    return this.items;
  }

  removeItem(index: number): Book[] {
    this.items.splice(index, 1);
    return this.items;
  }

  getItems(): Book[] {
    return this.items;
  }

  clearCart(): Book[] {
    return (this.items = []);
  }
}
