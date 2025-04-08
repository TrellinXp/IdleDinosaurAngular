import { Routes } from '@angular/router';
import { HatchComponent } from './hatch/hatch.component';
import { DinosaursComponent } from './dinosaurs/dinosaurs.component';
import { CreditsComponent } from './credits/credits.component';

export const routes: Routes = [
    { path: 'hatch', component: HatchComponent },
    { path: 'dinosaurs', component: DinosaursComponent },
    { path: 'credits', component: CreditsComponent },
    { path: '',   redirectTo: '/dinosaurs', pathMatch: 'full' }
  ];
