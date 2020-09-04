import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeterinariaRoutingModule } from './veterinaria-routing.module';
import { VeterinariaComponent } from './veterinaria/veterinaria.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CrudService } from '../services/crud.service';

@NgModule({
  imports: [
    CommonModule,
    VeterinariaRoutingModule,

    ReactiveFormsModule,

    HttpClientModule,

    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule
  ],
  declarations: [
    VeterinariaComponent
  ],
  providers: [
    CrudService
  ]
})
export class VeterinariaModule { }