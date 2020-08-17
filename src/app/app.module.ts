import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { PersonaModule } from './modules/persona/persona.module';

import { ProductoModule } from './modules/producto/producto.module';
import { AdminModule } from './modules/admin/admin.module';
import { UserModule } from './modules/user/user.module';
import { TestPipe } from './pipes/test.pipe';
import { ExpoPipe } from './pipes/expo.pipe';
import { PurePipe } from './pipes/pure.pipe';
import { ImpurePipe } from './pipes/impure.pipe';
import { NgColorDirective } from './directives/ng-color.directive';


@NgModule({
  declarations: [
    //Componentes y directivas
    AppComponent,
    TestPipe,
    ExpoPipe,
    PurePipe,
    ImpurePipe,
    NgColorDirective
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