import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './book-details.component';
import { BookDetailsRoutingModule } from './book-details-routing.module';



@NgModule({
  imports: [
    CommonModule,
    BookDetailsRoutingModule
  ],
  declarations: [BookDetailsComponent]
})
export class BookDetailsModule { }
