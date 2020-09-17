import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ReportComponent } from './report/report.component';
import { SidnavComponent } from './sidnav/sidnav.component';
import { CardComponent } from './card/card.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { ProductService } from '../shared/services/product.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,

    
    ReactiveFormsModule,

    
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    AdminComponent,
    ReportComponent,
    SidnavComponent,
    CardComponent
  ],
  providers:[
    ProductService
  ]
})
export class AdminModule { }