import { Injectable } from '@angular/core';
import { Book } from 'src/app/books';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Book[] = [];

  constructor() {}

  addToCart(book: Book) {
    const existsInCart = this.items.find(
      (item) => JSON.stringify(item) === JSON.stringify(book)
    );
    if (existsInCart) {
      window.alert('This book is already added to cart');
    } else {
      this.items.push(book);
      window.alert('Book is added to cart');
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  getItems() {
    return this.items;
  }
}
