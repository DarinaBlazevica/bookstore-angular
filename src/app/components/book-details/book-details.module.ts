import { NgModule } from '@angular/core';
import { BookDetailsComponent } from './book-details.component';
import { BookDetailsRoutingModule } from './book-details-routing.module';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    BookDetailsRoutingModule,
  ],
  declarations: [BookDetailsComponent, DialogBoxComponent]
})
export class BookDetailsModule { }
