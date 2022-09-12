import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { BookDetailsComponent } from './book-details.component';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';
import { Book } from 'src/app/books';
import { MatDialog } from '@angular/material/dialog';

describe('BookDetailsComponent ', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  let bookService: jasmine.SpyObj<BookService>;
  let cartService: jasmine.SpyObj<CartService>;
  let matDialog: MatDialog;

  let books: Book[] = [
    {
      id: 1,
      title: 'title',
      book_cover: 'test cover',
      price: 45,
      description: 'test description',
      qty: 3,
    },
    {
      id: 2,
      title: 'title',
      book_cover: 'test cover',
      price: 35,
      description: 'test description',
      qty: 1,
    },
    {
      id: 4,
      title: 'title',
      book_cover: 'test cover',
      price: 15,
      description: 'test description',
      qty: 2,
    },
  ];

  beforeEach(async () => {
    bookService = jasmine.createSpyObj('BookService', ['getBook']);
    cartService = jasmine.createSpyObj('CartService', [
      'getItems',
      'addToCart',
    ]);
    matDialog = jasmine.createSpyObj('MatDialog', ['open'])
    bookService.getBook.and.returnValue(of(books[0]));
    cartService.getItems.and.returnValue(books);

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BookDetailsComponent],
      providers: [
        {
          provide: BookService,
          useValue: bookService,
        },
        {
          provide: CartService,
          useValue: cartService,
        },
        {
          provide: MatDialog,
          useValue: matDialog,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should create component`, () => {
    expect(component).toBeTruthy();
  });

  it(`should have amountText to be expected text`, () => {
    expect(component.amountText).toContain('Amount: ');
  });

  it(`should have addToCartText to be expected text`, () => {
    expect(component.addToCartText).toContain('Add to Cart');
  });

  it('should should call getBook and retrun book by id', () => {
    bookService.getBook(books[0].id).subscribe((book) => {
      expect(book.id).toBe(1);
    });
  });

  it('should call addToCart and add book', () => {
        component.addToCart(books[1]);
        expect(component.book?.id).toBe(1);
  });

  it('should open dialog', () => {
        component.toggleCartDialog(books[1]);
        expect(component.dialog.open).toHaveBeenCalled();
    }); 
});
