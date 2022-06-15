import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () =>
      import('./components/main-page/main-page.module').then(
        (m) => m.MainPageModule
      ),
  },
  {
    path: 'books/:id',
    loadChildren: () =>
      import('./components/book-details/book-details.module').then(
        (m) => m.BookDetailsModule
      ),
  },

    {
      path: 'cart',
      loadChildren: () => import('./components/cart/cart.module').then((m) => m.CartModule),
    },
  
    { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
