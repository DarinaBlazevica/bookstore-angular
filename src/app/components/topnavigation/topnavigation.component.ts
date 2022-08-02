import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-topnavigation',
  templateUrl: './topnavigation.component.html',
  styleUrls: ['./topnavigation.component.css']
})

export class TopnavigationComponent {

  public bookstore_name: string;
  public cart: string;
  public hamburger: string;
  public backButton!: string


  constructor(private location: Location) {
    this.bookstore_name ='Bookstore'
    this.cart = 'assets/svg/shopping-cart.svg'
    this.hamburger='assets/svg/hamburger_menu.svg'
    this.backButton ='assets/svg/caret-left-solid.svg'
  }

  goBack(): void {
      this.location.back();
  }
}

