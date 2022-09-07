import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TopnavigationComponent } from './topnavigation.component';
import { Location } from '@angular/common';

describe('TopnavigationComponent ', () => {
  let component: TopnavigationComponent;
  let fixture: ComponentFixture<TopnavigationComponent>;
  let location: Location;
  
  const locationStub = {
    back: jasmine.createSpy('back')
  }
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TopnavigationComponent],
      providers: [
        { provide: Location, useValue: locationStub }
      ]
    }).compileComponents();
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should create component`, () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Bookstore'`, () => {
    expect(component.bookstore_name).toBe('Bookstore');
  });

  it(`should have as Cart Icon`, () => {
    expect(component.cart).toContain('shopping-cart.svg');
  });

  it(`should have as Hamburger Icon`, () => {
    expect(component.hamburger).toContain('hamburger_menu.svg');
  });

  it(`should have as Back Button Icon`, () => {
    expect(component.backButton).toContain('arrow-left-solid.svg');
  });

  it(`should go back`, () => { 
    component.goBack();
    location = fixture.debugElement.injector.get(Location);
    expect(location.back).toHaveBeenCalled();
  })
});
