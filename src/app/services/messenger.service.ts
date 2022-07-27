import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../interface/books';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject<Book>();
  
  constructor() { }

  sendMsg(book: Book) {
    this.subject.next(book)
  }

  getMsg() {
    return this.subject.asObservable()
  }
}
