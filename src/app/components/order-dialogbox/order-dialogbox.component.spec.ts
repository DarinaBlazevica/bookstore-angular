import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { OrderItem } from 'src/app/order';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { OrderDialogboxComponent } from './order-dialogbox.component';

describe('OrderDialogboxComponent', () => {
  let component: OrderDialogboxComponent;
  let fixture: ComponentFixture<OrderDialogboxComponent>;
  let matDialog: MatDialog;
  let router: Router;
  let data: { message: string; homepage: string };
  let matDialogRef: MatDialogRef<OrderDialogboxComponent>;
  let checkoutService: jasmine.SpyObj<CheckoutService>;
  let cartService: CartService;

  let orderItems : OrderItem[] =[
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
      price: 13,
      book_cover: 'item test book cover',
      qty: 1,
    },
    {
      id: 3,
      title: 'item test title',
      description: 'item test description',
      price: 53,
      book_cover: 'item test book cover',
      qty: 3,
    },
  ];

  beforeEach(async () => {
    matDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);
    data = jasmine.createSpyObj('MAT_DIALOG_DATA', ['message', 'homepage']);
    router = jasmine.createSpyObj('Router', ['navigate']);
    cartService = jasmine.createSpyObj('CartService', ['clearCart']);
    checkoutService = jasmine.createSpyObj('CheckoutService', ['resetForm' , 'fillOrder', 'getOrder']);
    checkoutService.getOrder.and.returnValue(of(orderItems));
    checkoutService.fillOrder.and.returnValue(of(orderItems));
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [OrderDialogboxComponent],
      providers: [
        { provide: MatDialog, useValue: matDialog },
        { provide: MAT_DIALOG_DATA, useValue: data },
        { provide: MatDialogRef, useValue: matDialogRef },
        { provide: Router, useValue: router },
        { provide: CheckoutService, useValue: checkoutService },
        { provide: CartService, useValue: cartService },
      ],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDialogboxComponent);
    cartService = TestBed.inject(CartService);
    component = fixture.componentInstance;
  });

  it(`should create component`, () => {
    expect(component).toBeTruthy();
  });

  it(`should call handleFillOrder and fill order`, () => {
      checkoutService.fillOrder().subscribe({
        next: order => {
          expect(order).toEqual(orderItems);
        }
      })
      component.handleFillOrder();
  });

  it(`should call getOrder and return order items`, () => {
    checkoutService.getOrder().subscribe({
      next: order => {
        expect(order).toEqual(orderItems);
      }
    })
    component.getOrder();
  });

  it(`should implement routes`, () => {
    component.routeToMainPage();
    expect(router.navigate).toHaveBeenCalledWith(['main']);
    expect(component.dialogRef.close).toHaveBeenCalled();
    expect(checkoutService.resetForm).toHaveBeenCalled();
  });
});
