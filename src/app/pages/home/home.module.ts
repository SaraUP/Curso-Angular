import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductService } from './../../shared/services/product.service';

const routes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent
  ],
  providers:[
    ProductService
  ],
  exports: [
    RouterModule
  ]
})
export class HomeModule { }