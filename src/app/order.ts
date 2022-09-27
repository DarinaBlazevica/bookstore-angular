import { Book } from "./books";

export class OrderItem {
    id: number;
    title: string;
    price: number;
    book_cover: string;
    description: string;
    qty: number;

    constructor(book: Book) {
        this.id = book.id
        this.title = book.title
        this.price = book.price
        this.qty = book.qty
        this.book_cover = book.book_cover
        this.description = book.description
    }
}