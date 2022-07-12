import { Injectable } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { Book } from 'src/app/books';
import { DialogBoxComponent } from '../components/dialog-box/dialog-box.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  
  public items: Book[] = [];

  constructor() {}

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
    this.items = [];
    return this.items;
  }
}
