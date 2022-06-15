import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { AuthgodService } from 'src/app/service/authgaurd.service';
import { CartDetailsComponent } from 'src/app/features/cart/cart-details/cart-details.component';
import { OrderDetailsComponent } from 'src/app/features/orders/order-details/order-details.component';

const routes: Routes = [
  { path: 'book', component: BookListComponent },
  {
    path: 'book/:category',
    component: BookListComponent,
  },
  {
    path: 'book-details/:bookId',
    component: BookDetailsComponent,
    canActivate: [AuthgodService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
