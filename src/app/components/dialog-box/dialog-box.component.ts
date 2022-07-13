import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css'],
})
export class DialogBoxComponent {
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { toCart: string; continueShopping: string },
    private router: Router,
    public dialogRef: MatDialogRef<DialogBoxComponent>,
  ) {}

  goToCart() {
      this.router.navigate(['cart']);
      this.dialogRef.close();
  }

  continueShopping() {
    this.dialogRef.close();
  }
}

