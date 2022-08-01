import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import data from "../data.json"
import { OrderItem } from '../order';


@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const order = data.order;
    const books = data.books;
    return {order, books};
  }
  genId(orderItems: OrderItem[]): number {
    return orderItems.length > 0 ? Math.max(...orderItems.map(orderItem => orderItem.id)) + 1 : 1;
  }
}
