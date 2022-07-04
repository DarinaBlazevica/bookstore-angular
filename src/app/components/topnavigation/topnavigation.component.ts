import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-topnavigation',
  templateUrl: './topnavigation.component.html',
  styleUrls: ['./topnavigation.component.css']
})

export class TopnavigationComponent implements OnInit {

  public bookstore_name: string;
  public cart: string;
  public hamburger: string;
  public backBtn!: string
  public backBtnNone!: string;


  constructor(private route: ActivatedRoute, private location: Location) {
    this.bookstore_name ='Bookstore'
    this.cart = 'assets/svg/shopping-cart.svg'
    this.hamburger='assets/svg/hamburger_menu.svg'
    this.backBtn ='assets/svg/caret-left-solid.svg'
    this.backBtnNone =''
  }
      
  ngOnInit(): void {  
  }    

  goBack(){
      this.location.back();
  }
}

