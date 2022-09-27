import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Book } from './books';
import { OrderItem } from './order';

describe('Order', () => {
  let orderClass: OrderItem;

  let book: Book = {
    id: 3,
    title: 'item test title',
    description: 'item test description',
    price: 53,
    book_cover: 'item test book cover',
    qty: 3,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    orderClass = new OrderItem(book);
  });

  it(`should create component`, () => {
    expect(orderClass).toBeTruthy();
  });
});
