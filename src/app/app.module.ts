import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatSliderModule } from "@angular/material/slider";
import { MatIconModule } from "@angular/material/icon";
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    //Componentes y directivas
    AppComponent
  ],
  imports: [
    //Modulos dentro de este modulo
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,

    MatSliderModule,
    MatIconModule
  ],
  providers: [
    //Servicios
  AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
