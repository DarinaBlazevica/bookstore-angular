import { Book } from "./books";

export class CartItem {
    id: number;
    title: string;
    price: number;
    book_cover: string;
    qty: number;

    constructor(book: Book) {
        this.id = book.id
        this.title = book.title
        this.price = book.price
        this.book_cover = book.book_cover
        this.qty = book.qty
    }
}