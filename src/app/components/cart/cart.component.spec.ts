import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Book } from 'src/app/books';
import { CartService } from 'src/app/services/cart.service';
import { CartComponent } from './cart.component';


describe('CartComponent ', () => {
    let component: CartComponent;
    let fixture: ComponentFixture<CartComponent>;
    let cartService: CartService;

    let testItems: Book[] = [
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
          }
    ];
     
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [CartComponent],
      }).compileComponents();
      
    });
  
    beforeEach(() => {
    
      fixture = TestBed.createComponent(CartComponent);
      cartService = TestBed.inject(CartService);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it(`should create component`, () => {
      expect(component).toBeTruthy();
    });

    it(`should have specific icon as closeButton'`, () => {
        expect(component.closeButton).toBe('assets/svg/xmark-solid.svg');
    });

    it(`should have total cost text "Total cost:"'`, () => {
        expect(component.totalCost).toBe('Total cost:');
    });

    it(`should have checkout text "Checkout"'`, () => {
        expect(component.checkoutText).toBe('Checkout');
    });

    it(`should have empty cart text as "...Cart is Empty..."`, () => {
        expect(component.emptyCartText).toBe('...Cart is Empty...');
    });

    it(`should remove item from cart`, () => {
        cartService.items = testItems;
        let index = testItems.length - 1
        component.removeItem(index);
        expect(testItems.length).toBe(2);
    });

    it(`should calculate total cost for cart items`, () => {
        let totalElementPrice = 0;
        component.items = testItems;
        testItems.forEach((element) => {
            totalElementPrice += element.price * element.qty          
        })
        component.calculateTotalPrice(); 
        expect(totalElementPrice).toBe(264);               
    });   
  });