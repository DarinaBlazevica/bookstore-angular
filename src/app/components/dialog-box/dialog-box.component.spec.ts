import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

describe('DialogBoxComponent', () => {
  let component: DialogBoxComponent;
  let fixture: ComponentFixture<DialogBoxComponent>;
  let matDialog: MatDialog;
  let router: Router;
  let data: { toCart: string; continueShopping: string };
  let matDialogRef: MatDialogRef<DialogBoxComponent>;

  beforeEach(async () => {
    matDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);
    data = jasmine.createSpyObj('MAT_DIALOG_DATA', [
      'toCart',
      'continueShopping',
    ]);
    router = jasmine.createSpyObj('Router', ['navigate']);
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DialogBoxComponent],
      providers: [
        { provide: MatDialog, useValue: matDialog },
        { provide: MAT_DIALOG_DATA, useValue: data },
        { provide: MatDialogRef, useValue: matDialogRef },
        { provide: Router, useValue: router },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should create component`, () => {
    expect(component).toBeTruthy();
  });

  it(`should expect img path for closeButtonIcon`, () => {
    expect(component.closeButtonIcon).toBe('assets/svg/xmark-solid.svg');
  });

  it(`should call and implement goToCart`, () => {
    component.goToCart();
    expect(router.navigate).toHaveBeenCalledWith(['cart']);
  });

  it(`should call and implement continueShopping`, () => {
    component.continueShopping();
    expect(component.dialogRef.close).toHaveBeenCalled();
  });
});
