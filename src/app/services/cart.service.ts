import { Injectable } from '@angular/core';
import { Observable, map, filter } from 'rxjs';
import { CartItem } from 'src/app/interface/cartItems';
import { Book } from '../interface/books';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public items = [];

  public cartUrl = 'api/cartItems';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getItems(): Observable<CartItem[]> {
    return this.httpClient.get<CartItem[]>(this.cartUrl).pipe(
      map((result: any[]) => {
        let cartItems: CartItem[] = [];

        for (let item of result) {
          let existsInCart = false;

          for (let i in cartItems) {
            if (cartItems[i].id === item.book.id) {
              cartItems[i].qty += item.book.qty;
              existsInCart = true;
            }
          }

          if (!existsInCart) {
            cartItems.push(new CartItem(item.book));
          }
        }
        return cartItems;
      })
    );
  }

  addToCart(book: Book): Observable<any> {
    return this.httpClient.post(this.cartUrl, { book }, this.httpOptions);
  }

  removeItem(index: number): Observable<CartItem> {
    const url = `${this.cartUrl}/${index}`;
    return this.httpClient.delete<CartItem>(url, this.httpOptions);
  }

  clearCart(): Observable<CartItem[]> {
    const url = `${this.cartUrl}`;
    return this.httpClient.delete<CartItem[]>(url, this.httpOptions);
  }
}
