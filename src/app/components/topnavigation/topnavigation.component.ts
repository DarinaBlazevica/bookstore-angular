import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnavigation',
  templateUrl: './topnavigation.component.html',
  styleUrls: ['./topnavigation.component.css']
})

export class TopnavigationComponent implements OnInit {

  public bookstore_name: string;
  public cart: string;
  public hamburger: string;

  constructor() {
    this.bookstore_name ='Bookstore'
    this.cart = 'assets/svg/shopping-cart.svg'
    this.hamburger='assets/svg/hamburger_menu.svg'
  }
      
  ngOnInit(): void {
  }

}
