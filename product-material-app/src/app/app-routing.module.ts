import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductComponent } from './component/product/product.component';

//array of route
// each route has path ,componenet, child and so on
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  {path:'product/:category',component:ProductDetailsComponent},
  {path: 'product-details/:id',component:ProductDetailsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
