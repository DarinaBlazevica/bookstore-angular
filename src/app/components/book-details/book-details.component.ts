import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/books';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  
  book: Book | undefined;

  public items = this.cartService.getItems();

  public toCart!: string;
  public continueShopping!: string;
  public showDialog = false;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.bookService.getBook(id).subscribe((book) => (this.book = book));
  }

  addToCart(book: Book) {
    this.cartService.addToCart(book);
  }
}
