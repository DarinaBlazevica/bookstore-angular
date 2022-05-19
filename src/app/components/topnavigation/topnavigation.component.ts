import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topnavigation',
  templateUrl: './topnavigation.component.html',
  styleUrls: ['./topnavigation.component.css']
})

export class TopnavigationComponent implements OnInit {

  @Input() bookstore_name: string;
  @Input() cart: string;
  @Input() hamburger: string;

  constructor() {
    this.bookstore_name ='Bookstore'
    this.cart = 'assets/svg/shopping-cart.svg'
    this.hamburger='assets/svg/hamburger_menu.svg'
  }
      
  ngOnInit(): void {
  }

}
