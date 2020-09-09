import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './../shared/services/auth.service';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgElseDirective } from './../shared/directives/ng-else.directive';

const routes: Routes = [
  {path: '', component: LoginComponent}
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,

    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent,
    NgElseDirective
  ],
  providers: [
    AuthService
  ],
  exports: [RouterModule]
})
export class LoginModule { }