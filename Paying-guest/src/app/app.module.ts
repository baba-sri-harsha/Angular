import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TodoComponent } from './todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PgComponent } from './pg/pg.component';
import { PgNotFoundComponent } from './pg-not-found/pg-not-found.component';
import { SideNavComponent } from './side-nav/side-nav.component';
// import { TodoChildComponent } from './todo-child/todo-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PgComponent,
    PgNotFoundComponent,
    SideNavComponent,
    //
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
