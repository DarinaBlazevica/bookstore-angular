import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckoutComponent } from "./checkout.component";
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { CheckoutService } from 'src/app/services/checkout.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

describe('CheckoutComponent', () => {
    let component: CheckoutComponent;
    let fixture: ComponentFixture<CheckoutComponent>;
    let checkoutService: CheckoutService;
    let matDialog: MatDialog;
    let formBuilder: FormBuilder;

    beforeEach(async () => {
      checkoutService = jasmine.createSpyObj('CheckoutService', ['getForm' , 'toggleOrderDialog', 'toggleCheckoutForm']);
      await TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [CheckoutComponent],
        providers: [
            { provide: MatDialog, useValue: matDialog },
            { provide: FormBuilder, useValue: formBuilder },
            { provide: CheckoutService, useValue: checkoutService },
          ],
     }).compileComponents();     
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(CheckoutComponent);
      checkoutService = TestBed.inject(CheckoutService);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it(`should create component`, () => {
        expect(component).toBeTruthy();
    });

    it('should have "Order" text on button', ()=> {
        expect(component.orderText).toEqual('Order')
    })

    it('should call toggleOrderDialog and return expected result', ()=> {
        component.toggleOrderDialog();
        expect(component.toggleOrderDialog).toBeTruthy();
    })

    it('should call toggleCheckoutForm and return expected result', ()=> {
        component.toggleCheckoutForm();
        expect(component.toggleCheckoutForm).toBeTruthy();
    })

    // it('should call userData and return expected result: Controls', ()=> {
    //     checkoutService.checkoutOrderForm = jasmine.createSpyObj('AbstractControl', ['controls'])
    //     expect(component.userData).toBeTruthy();
    // })
})