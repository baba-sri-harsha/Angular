import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CourseLibModule } from 'projects/course-lib/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CourseLibModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
