import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductTypesComponent } from './components/product-types/product-types.component';
import { ProductComponent } from './components/product/product.component';
import { AddProductComponent } from './modules/admin/components/add-product/add-product.component';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';
import { DeleteProductComponent } from './modules/admin/components/delete-product/delete-product.component';
import { UpdateProductComponent } from './modules/admin/components/update-product/update-product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product/', component: ProductComponent },
  {
    path: 'product/:category',
    component: ProductTypesComponent,
    children: [{ path: ':type', component: ProductComponent }],
  },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
      { path: 'add-product', component: AddProductComponent },
      { path: 'update-product', component: UpdateProductComponent },
      { path: 'delete-product', component: DeleteProductComponent },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
