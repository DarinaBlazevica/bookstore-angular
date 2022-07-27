import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import data from "../data.json"
import { CartItem } from '../interface/cartItems';


@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const books = data.books;
    const cartItems = data.cartItems
    return {books, cartItems}
  }

  genId(cartItems: CartItem[]): number {
    return cartItems.length > 0 ? Math.max(...cartItems.map(cartItem => cartItem.id)) + 1 : 1;
  }
}