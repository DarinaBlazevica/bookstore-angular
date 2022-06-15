import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './book-details.component';
import { BookDetailsRoutingModule } from './book-details-routing.module';
import { FormsModule } from '@angular/forms';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    BookDetailsRoutingModule,
  ],
  declarations: [BookDetailsComponent, DialogBoxComponent]
})
export class BookDetailsModule { }
