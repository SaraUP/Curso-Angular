import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { PersonaModule } from './modules/persona/persona.module';

@NgModule({
  declarations: [
    //Componentes y directivas
    AppComponent
  ],
  imports: [
    //Modulos dentro de este modulo
    BrowserModule,
    FormsModule,
    PersonaModule
  ],
  providers: [
    //Servicios
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }