import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectComponent } from './direct/direct.component';
import { GadjetsComponent } from './gadjets/gadjets.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectComponent,
    GadjetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
