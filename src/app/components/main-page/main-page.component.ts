import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/books';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  books: Book[] = [];

  observer!: IntersectionObserver;

  @ViewChildren('bookItems') bookItems!: QueryList<ElementRef>;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
    this.intersectionObserver();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe((books) => {
      books.forEach((item) => {
        this.books.push(item);
      });
    });
  }

  ngAfterViewInit() {
    this.bookItems.changes.subscribe((item) => {
      if (item.last) this.observer.observe(item.last.nativeElement);
    });
  }

  intersectionObserver() {
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) this.getBooks();
    });
  }
}
