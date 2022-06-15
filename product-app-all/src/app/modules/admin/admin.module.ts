import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/module/material/material.module';

@NgModule({
  declarations: [
    AddProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    AdminDashboardComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule, MaterialModule],
})
export class AdminModule {}
