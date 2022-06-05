import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectComponent } from './direct/direct.component';
import { GadjetsComponent } from './gadjets/gadjets.component';
import { CustomdatePipe } from './customdate.pipe';
import { DateComponent } from './date/date.component';
import { DesignPipe } from './design.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DirectComponent,
    GadjetsComponent,
    CustomdatePipe,
    DateComponent,
    DesignPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
