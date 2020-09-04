import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VeterinariaComponent } from './veterinaria/veterinaria.component';

const routes: Routes = [
  {path: '', component: VeterinariaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeterinariaRoutingModule { }