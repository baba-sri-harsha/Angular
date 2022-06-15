import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// we have to write it 
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { PgComponent } from './pg/pg.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PgComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
