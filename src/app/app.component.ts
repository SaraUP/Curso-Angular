import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck, OnDestroy{
  title = 'curso-angular';

  votantes = [
    {
      nombre: 'juan', 
      edad: 13, 
      habilitado: true,
      voto:false
    },
    {
      nombre: 'marco', 
      edad: 54, 
      habilitado: false,
      voto:false
    },
    {
      nombre: 'julia', 
      edad: 78, 
      habilitado: true,
      voto:false
    },
    {
      nombre: 'maria', 
      edad: 90, 
      habilitado: false,
      voto:false
    },
    {
      nombre: 'marta', 
      edad: 56, 
      habilitado: true,
      voto:false
    },
    {
      nombre: 'jorge', 
      edad: 33, 
      habilitado: true,
      voto:false
    },
    {
      nombre: 'isela', 
      edad: 10, 
      habilitado: false,
      voto:false
    },
    {
      nombre: 'omar', 
      edad: 34, 
      habilitado: false,
      voto:false
    },
    {
      nombre: 'juana', 
      edad: 5, 
      habilitado: true,
      voto:false
    },
    {
      nombre: 'julio', 
      edad: 75, 
      habilitado: false,
      voto:false
    }
  ]

  ngOnInit(){
    
  }

  ngOnDestroy(){}

  i:number=0;
  j:number=0;
  k:number=0;

  ngDoCheck(){
    this.i=0;
    this.j=0;
    this.k=0;
    for(let votante of this.votantes){
      if(votante.voto && votante.habilitado){
        this.i++;
      }
      if(votante.habilitado){
        this.j++;
      }
      if(!votante.habilitado){
        this.k++;
      }
    }
  }
}
