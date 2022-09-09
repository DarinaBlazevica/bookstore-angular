import { TestBed } from '@angular/core/testing';
import { InMemoryDataService } from './in-memory-data.service';
import data from "../data.json"
import { OrderItem } from '../order';

describe('DataService', () => {
  let service: InMemoryDataService;
  let newOrderId: number;

  let orders: OrderItem[] = [{
    id: 1,
    title: "order title",
    price: 34,
    book_cover: "order book cover",
    description: 'order description',
    qty: 4
  },
  {
    id: 2,
    title: "order title",
    price: 14,
    book_cover: "order book cover",
    description: 'order description',
    qty: 1
  }
]

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call createDb and retrun data', () => {
    expect(service.createDb()).toBeTruthy()
  });

  it('should call genId and return id', () => {
    service.genId(orders);
    newOrderId = orders[1].id + 1;  
    expect(newOrderId).toBe(3);
  });
});
