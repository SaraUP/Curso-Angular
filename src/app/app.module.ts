import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatSliderModule } from "@angular/material/slider";
import { MatIconModule } from "@angular/material/icon";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./shared/interceptors/auth.interceptor";


const routes: Routes = [
  
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)}
];


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

    HttpClientModule,

    MatSliderModule,
    MatIconModule,

    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppModule {}
