import { NgModule } from '@angular/core';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
 
@NgModule({
  declarations: [MainPageComponent],
  imports: [
    SharedModule,
    MainPageRoutingModule
  ]
})
export class MainPageModule { }
