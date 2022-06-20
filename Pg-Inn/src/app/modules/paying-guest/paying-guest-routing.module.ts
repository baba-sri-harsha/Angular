import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PayingGuestListComponent } from './components/paying-guest-list/paying-guest-list.component';
import { PgService } from './services/pg.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pg-city/:city', component: PayingGuestListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [PgService],
  exports: [RouterModule],
})
export class PayingGuestRoutingModule {}
