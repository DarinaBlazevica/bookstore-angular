import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BookService } from 'src/app/services/book.service';
import { MainPageComponent } from './main-page.component';
import { of } from 'rxjs';
import data from '../../data.json';
import { Book } from 'src/app/books';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;
  let mockBookService: jasmine.SpyObj<BookService>;
  let BOOKS: typeof data.books;

  beforeEach(async () => {
    mockBookService = jasmine.createSpyObj('BookService', ['getBooks']);
    mockBookService.getBooks.and.returnValue(of(BOOKS));
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MainPageComponent],
      providers: [
        {
          provide: BookService,
          useValue: mockBookService,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should create component`, () => {
    expect(component).toBeTruthy();
  });

  it(`should call getBooks from service`, () => {
    const expectedBooks: Book[] = [
      {
        id: 1,
        title: 'title',
        book_cover: 'test cover',
        price: 45,
        description: 'test description',
        qty: 3,
      },
      {
        id: 4,
        title: 'title',
        book_cover: 'test cover',
        price: 25,
        description: 'test description',
        qty: 2,
      },
    ];

    mockBookService.getBooks.and.returnValue(of(expectedBooks));
    mockBookService.getBooks().subscribe((books) => {
      books.forEach((item) => {
        books.push(item);
      });
      component.getBooks();
      expect(books.length).toBeGreaterThan(1);
    });
  });

  it(`should call getBooks if entries are intersecting`, () => {
    spyOn(component, 'getBooks');
    spyOn(component, 'intersectionObserver');
    
    const expectedBooks: Book[] = [
      {
        id: 1,
        title: 'title',
        book_cover: 'test cover',
        price: 45,
        description: 'test description',
        qty: 3,
      }]
            
        new IntersectionObserver(entries => {
          if(entries[0].isIntersecting) {
            mockBookService.getBooks.and.returnValue(of(expectedBooks));
            component.getBooks();
            expect(component.getBooks).toHaveBeenCalled();
          }
      })
  });
});
