import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { PayingGuestRoutingModule } from './paying-guest-routing.module';

@NgModule({
  declarations: [HomeComponent, NavBarComponent],
  imports: [CommonModule, MaterialModule, PayingGuestRoutingModule],
  exports: [HomeComponent, NavBarComponent],
})
export class PayingGuestModule {}
