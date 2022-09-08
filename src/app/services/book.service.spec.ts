import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Book } from '../books';
import { BookService } from './book.service';

describe('BookService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let bookService: BookService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    bookService = new BookService(httpClientSpy);
  });

  it('should be created', () => {
    expect(bookService).toBeTruthy();
  });

  it('should call getBooks', () => {
    const expectedBooks: Book[] = [
      {
        id: 1,
        title: 'Anna Karenina',
        price: 33,
        book_cover: 'assets/books_img/tolstoy.jpg',
        description:
          'A complex novel in eight parts, with more than a dozen major characters, Anna Karenina is spread over more than 800 pages (depending on the translation and publisher), typically contained in two volumes. It deals with themes of betrayal, faith, family, marriage, Imperial Russian society, desire, and rural vs. city life. The story centers on an extramarital affair between Anna and dashing cavalry officer Count Alexei Kirillovich Vronsky that scandalizes the social circles of Saint Petersburg and forces the young lovers to flee to Italy in a search for happiness, but after they return to Russia, their lives further unravel.',
        qty: 1,
      },
      {
        id: 3,
        title: 'The Master and Margarita',
        price: 21,
        book_cover: 'assets/books_img/bulgakov.jpg',
        description:
          'The story concerns a visit by the devil to the officially atheistic Soviet Union. The Master and Margarita combines supernatural elements with satirical dark comedy and Christian philosophy, defying categorization within a single genre. Many critics consider it to be one of the best novels of the 20th century, as well as the foremost of Soviet satires',
        qty: 1,
      },
    ];

    httpClientSpy.get.and.returnValue(of(expectedBooks));
    bookService.getBooks().subscribe({
      next: (books) => {
        expect(books).toEqual(expectedBooks);
      },
    });
  });

  it('should return book by id', () => {
    const expectedBook: Book = {
      id: 1,
      title: 'The Master and Margarita',
      price: 21,
      book_cover: 'assets/books_img/bulgakov.jpg',
      description:
        'The story concerns a visit by the devil to the officially atheistic Soviet Union. The Master and Margarita combines supernatural elements with satirical dark comedy and Christian philosophy, defying categorization within a single genre. Many critics consider it to be one of the best novels of the 20th century, as well as the foremost of Soviet satires',
      qty: 1,
    };

    httpClientSpy.get.and.returnValue(of(expectedBook));
    bookService.getBook(expectedBook.id).subscribe((book) => {
      expect(book.id).toBe(1);
    });
  });
});
