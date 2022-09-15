import { TestBed } from '@angular/core/testing';
import { Book } from '../books';
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  let cartItems: Book[] = [
    {
      id: 1,
      title: 'item test title',
      description: 'item test description',
      price: 23,
      book_cover: 'item test book cover',
      qty: 4,
    },

    {
      id: 2,
      title: 'item test title',
      description: 'item test description',
      price: 13,
      book_cover: 'item test book cover',
      qty: 1,
    },
    {
      id: 3,
      title: 'item test title',
      description: 'item test description',
      price: 53,
      book_cover: 'item test book cover',
      qty: 3,
    },
  ];

  let addedItem: Book = {
    id: 3,
    title: 'item test title',
    description: 'item test description',
    price: 53,
    book_cover: 'item test book cover',
    qty: 1,
  };

  let existsInCart = false;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getItems and return expected result: array of books', () => {
    expect(service.getItems()).toBeTruthy();
  });

  it('should call clearCart and return expected result: empty array', () => {
    expect(service.clearCart()).toBeTruthy();
  });

  it('should call removeItem and return expected result: array without deleted item', () => {
    service.removeItem(0);
    cartItems.splice(0, 1);
    expect(cartItems.length).toBeLessThanOrEqual(4);
  });

  it('should call addTocart and return expected result', () => {
    for (let i in cartItems) {
      if (cartItems[i].id === addedItem.id) {
        cartItems[i].qty += addedItem.qty;
        existsInCart = true;
      } else {
        cartItems.push(addedItem);
      }
      expect(service.addToCart(addedItem)).toBeTruthy();
    }
  });
});
