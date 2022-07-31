import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { OrderItem } from '../order';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  public orderItems = this.cartService.getItems();

  public orderUrl = 'api/order';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private httpClient: HttpClient,
    private cartService: CartService,
  ) {}
  

  getOrder(): Observable<OrderItem[]> {
    return this.httpClient.get<OrderItem[]>(this.orderUrl).pipe(
      map(() => {
        let orderItems: OrderItem[] = [];
        for (let item of this.orderItems) {
          orderItems.push(new OrderItem(item));
        }
        return orderItems;
      })
    );
  }

  fillOrder(): Observable<any> {
    const order = this.orderItems;
    return this.httpClient.post(this.orderUrl, { order  }, this.httpOptions);
  }
}
