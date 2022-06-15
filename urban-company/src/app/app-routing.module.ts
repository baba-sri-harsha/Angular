import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BeautyComponent } from './components/beauty/beauty.component';
import { CarpentaryComponent } from './components/carpentary/carpentary.component';
import { CommercialComponent } from './components/commercial/commercial.component';
import { ConatctusComponent } from './components/conatctus/conatctus.component';
import { GardeningComponent } from './components/gardening/gardening.component';
import { HairstylistComponent } from './components/hairstylist/hairstylist.component';
import { HomeServicesComponent } from './components/home-services/home-services.component';
import { HomeComponent } from './components/home/home.component';
import { HouseComponent } from './components/house/house.component';
import { MakeupComponent } from './components/makeup/makeup.component';
import { PaintingComponent } from './components/painting/painting.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  {
    path: 'services',
    component: ServicesComponent,
    children: [
      {
        path: 'beauty',
        component: BeautyComponent,
        children: [
          { path: 'hairstylist', component: HairstylistComponent },
          { path: 'makeup', component: MakeupComponent },
        ],
      },
      {
        path: 'painting',
        component: PaintingComponent,
        children: [
          { path: 'housinig', component: HouseComponent },
          { path: 'comercial', component: CommercialComponent },
        ],
      },
      { path: 'gardening', component: GardeningComponent },
      {
        path: 'housing',
        component: HomeServicesComponent,
        children: [{ path: 'carpentary', component: CarpentaryComponent }],
      },
    ],
  },

  { path: 'conatctus', component: ConatctusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
