import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ServicesComponent } from './components/services/services.component';
import { ConatctusComponent } from './components/conatctus/conatctus.component';
import { BeautyComponent } from './components/beauty/beauty.component';
import { PaintingComponent } from './components/painting/painting.component';
import { GardeningComponent } from './components/gardening/gardening.component';
import { HomeServicesComponent } from './components/home-services/home-services.component';
import { HouseComponent } from './components/house/house.component';
import { CommercialComponent } from './components/commercial/commercial.component';
import { HairstylistComponent } from './components/hairstylist/hairstylist.component';
import { MakeupComponent } from './components/makeup/makeup.component';
import { CarpentaryComponent } from './components/carpentary/carpentary.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ServicesComponent,
    ConatctusComponent,
    BeautyComponent,
    PaintingComponent,
    GardeningComponent,
    HomeServicesComponent,
    HouseComponent,
    CommercialComponent,
    HairstylistComponent,
    MakeupComponent,
    CarpentaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
