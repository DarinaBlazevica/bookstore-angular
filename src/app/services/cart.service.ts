import { Injectable } from '@angular/core';
import { Book } from 'src/app/books';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Book[] = [];

  constructor() {}

  addToCart(book: Book) {
    this.items.push(book);
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  getItems() {
    return this.items;
  }
}
