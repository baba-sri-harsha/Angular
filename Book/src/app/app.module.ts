import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './modules/book/components/book-list/book-list.component';
import { BookDetailsComponent } from './modules/book/components/book-details/book-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './modules/book/components/cart/cart.component';
import { BookDescriptionComponent } from './modules/book/components/book-description/book-description.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Shared-module/material/material.module';
import { BookServiceService } from './service/book-service.service';
import { BookModule } from './modules/book/book.module';
import { FormsModule } from '@angular/forms';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BuyingComponent } from './components/buying/buying.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/homeservices/services.component';
import { LoginComponent } from './components/login/login.component';
import { RentalComponent } from './components/rental/rental.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailsComponent,
    NavbarComponent,
    CartComponent,
    BookDescriptionComponent,
    LoginComponent,
    HomeComponent,
    AboutusComponent,
    ServicesComponent,
    ContactusComponent,
    RentalComponent,
    BuyingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    BookModule,
    AppRoutingModule,
  ],
  providers: [BookServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
