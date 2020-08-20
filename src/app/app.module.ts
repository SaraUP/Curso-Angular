import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    //Componentes y directivas
    AppComponent,
    AboutComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    //Modulos dentro de este modulo
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    //Servicios
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }