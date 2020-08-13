import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { PersonaModule } from './modules/persona/persona.module';

import { ProductoModule } from './modules/producto/producto.module';
import { AdminModule } from './modules/admin/admin.module';
import { UserModule } from './modules/user/user.module';

@NgModule({
  declarations: [
    //Componentes y directivas
    AppComponent
  ],
  imports: [
    //Modulos dentro de este modulo
    BrowserModule,
    FormsModule,
    PersonaModule,
    ProductoModule,
    AdminModule,
    UserModule
  ],
  providers: [
    //Servicios
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }