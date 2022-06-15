import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginLibModule } from 'projects/login-lib/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LoginLibModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
