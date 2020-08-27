import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';

import { NgElseDirective } from '../directives/ng-else.directive';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent,
    NgElseDirective
  ]
})
export class LoginModule { }