import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/books';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  books: Book[] = [];

  @ViewChildren('bookItems') bookItems!: QueryList<ElementRef>;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe((books) => (this.books = books));
  }
}
