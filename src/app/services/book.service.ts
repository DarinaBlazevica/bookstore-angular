import { Book } from '../books';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  
  public booksUrl = 'api/books';

  constructor(private httpClient: HttpClient) {}

  getBooks(): Observable<Book[]> {
    // console.log(this.httpClient);
    return this.httpClient.get<Book[]>(this.booksUrl);
  }

  getBook(id: number): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;
    return this.httpClient.get<Book>(url);
  }
}
