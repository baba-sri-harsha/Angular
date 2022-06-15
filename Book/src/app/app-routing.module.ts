import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BuyingComponent } from './components/buying/buying.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/homeservices/services.component';
import { LoginComponent } from './components/login/login.component';
import { RentalComponent } from './components/rental/rental.component';
import { CartDetailsComponent } from './features/cart/cart-details/cart-details.component';
import { OrderDetailsComponent } from './features/orders/order-details/order-details.component';
import { BookDetailsComponent } from './modules/book/components/book-details/book-details.component';
import { BookListComponent } from './modules/book/components/book-list/book-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'aboutus', component: AboutusComponent },
      {
        path: 'services',
        component: ServicesComponent,
        children: [
          { path: 'rent', component: RentalComponent },
          { path: 'buy', component: BuyingComponent },
        ],
      },
      { path: 'contactus', component: ContactusComponent },
    ],
  },
  { path: 'cart', component: BookDetailsComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'cart-details',
    loadChildren: () =>
      import('./features/cart/cart.module').then((c) => c.CartModule),
  },
  {
    path: 'order-details',
    loadChildren: () =>
      import('./features/orders/orders.module').then((o) => o.OrdersModule),
  },
  { path: 'payment-details', loadChildren: () => import('./features/payments/payments.module').then(m => m.PaymentsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
