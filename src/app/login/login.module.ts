import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';

import { NgElseDirective } from '../directives/ng-else.directive';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  declarations: [
    LoginComponent,
    NgElseDirective
  ],
  providers: [
    AuthService
  ]
})
export class LoginModule { }