import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/interface/books';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { MatDialog } from '@angular/material/dialog';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  
  @Input() book!: Book;

  public items = this.cartService.getItems();

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private cartService: CartService,
    public dialog: MatDialog,
    private msgService: MessengerService
  ) {}

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.bookService.getBook(id).subscribe((book) => (this.book = book));
  }

  handleAddToCart() {
    this.cartService.addToCart(this.book).subscribe(() => {
      this.msgService.sendMsg(this.book);
    });
  }

  toggleCartDialog() {
    this.handleAddToCart();
    this.dialog.open(DialogBoxComponent, {
      data: { toCart: 'Go to Cart', continueShopping: 'Continue shopping' },
    });
  }
}
