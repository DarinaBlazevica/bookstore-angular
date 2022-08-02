import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from 'src/app/books';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public items: Book[] = [];

  constructor(private httpClient: HttpClient) {}

  addToCart(book: Book) {
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
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    return (this.items = []);
  }
}
