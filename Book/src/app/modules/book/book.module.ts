import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { MaterialModule } from 'src/app/Shared-module/material/material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, BookRoutingModule, MaterialModule],
})
export class BookModule {}
