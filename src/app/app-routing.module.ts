import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';


const routes: Routes =[
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {}