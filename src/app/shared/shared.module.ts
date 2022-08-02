import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [],
  imports: [], 
  exports: [
    CommonModule, 
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
