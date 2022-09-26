import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map, of } from 'rxjs';
import { Book } from '../books';
import { OrderItem } from '../order';
import { CartService } from './cart.service';
import { CheckoutService } from './checkout.service';

describe('CheckoutService', () => {
  let service: CheckoutService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let cartService: CartService;
  let matDialog: MatDialog;
  let formBuilder: FormBuilder;
  let formGroup: FormGroup;

  let orderItems: Book[] = [
    {
        id: 1,
        title: 'item test title',
        description: 'item test description',
        price: 23,
        book_cover: 'item test book cover',
        qty: 4,
    },
    {
        id: 2,
        title: 'item test title',
        description: 'item test description',
        price: 34,
        book_cover: 'item test book cover',
        qty: 2,
    }
  ];

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    cartService = jasmine.createSpyObj('CartService', ['getItems']);
    formBuilder = jasmine.createSpyObj('FormBuilder', ['group']);
    matDialog = jasmine.createSpyObj('MatDialog', ['open']);
    service = new CheckoutService(
      httpClientSpy,
      cartService,
      matDialog,
      formBuilder
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getOrder and return order items', () => {   
    httpClientSpy.get.and.returnValue(of(orderItems));

    service.getOrder().pipe(map(()=> { 
        let pushedOrder: OrderItem[] = [];      
        for(let i of orderItems) {           
            pushedOrder.push(new OrderItem(i))
        }
        expect(pushedOrder).toEqual(orderItems);
    }))
    expect(service.getOrder()).toBeTruthy();
  });

  it('should call email match and return result', () => {
    // let controlName = 'name';
    // let matchingControlName = 'name'
    // const control = formGroup.controls[controlName];
    // const matchingControl = formGroup.controls[matchingControlName];
    // expect(service.emailMatch(controlName, matchingControlName)).toBeTruthy();
  });

  it('should call fillOrder and return saved orders', () => {
    service.userInfo = jasmine.createSpyObj('AbstractControl', ['get']);
    httpClientSpy.post.and.returnValue(of(orderItems));
    service.fillOrder().subscribe({
        next: (order) => {
            expect(order).toEqual(orderItems);
        }
    });
  });

  it('should call getForm and return result: FormGroup', () => {
    let formCheckoutTestGroup = formBuilder.group({
      user_email: new FormControl(),
      confirm_email: new FormControl(),
      name: new FormControl(),
    });
    service.getForm();
    expect(service.getForm()).toEqual(formCheckoutTestGroup);
  });

  it('should call resetForm and return result: FormGroup with no text', () => {
    service.checkoutOrderForm = jasmine.createSpyObj('FormGroup', ['reset']);
    service.resetForm();
    expect(service.checkoutOrderForm.reset).toHaveBeenCalled();
  });

  it('should toggle checkout form', () => {
    spyOn(service.showCheckoutChange, 'emit');
    service.toggleCheckoutForm();
    expect(service.showCheckoutChange.emit).toHaveBeenCalledWith(false);
  });

  it('should open dialog ', () => {
    service.toggleOrderDialog();
    expect(service.dialog.open).toHaveBeenCalled();
  });
});
