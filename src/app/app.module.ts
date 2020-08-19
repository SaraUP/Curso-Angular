import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PrimerParcialComponent } from './components/primer-parcial/primer-parcial.component';

import { HabilitadoPipe } from './pipes/habilitado.pipe';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PrimerParcialComponent,
    HabilitadoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
