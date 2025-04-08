import { Routes } from '@angular/router';
import { HatchComponent } from './hatch/hatch.component';
import { DinosaursComponent } from './dinosaurs/dinosaurs.component';

export const routes: Routes = [
    { path: 'hatch', component: HatchComponent },
    { path: 'dinosaurs', component: DinosaursComponent },
    { path: '',   redirectTo: '/dinosaurs', pathMatch: 'full' }
  ];
