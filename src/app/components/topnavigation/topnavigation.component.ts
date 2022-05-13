import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topnavigation',
  templateUrl: './topnavigation.component.html',
  styleUrls: ['./topnavigation.component.css']
})

export class TopnavigationComponent implements OnInit {

  @Input() bookstore_name: string;
  @Input() cart: any;
  @Input() hamburger: any;

  constructor() {
    this.bookstore_name =''
    this.cart = ''
    this.hamburger=''
  }
      
  ngOnInit(): void {
  }

}
