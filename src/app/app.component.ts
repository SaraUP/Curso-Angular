import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'curso-angular';

  name = 'SARA';

  persons = [
    {
      name: 'Sara',
      lastName: 'Uriarte',
      age: 21,
      enable: true
    },
    {
      name: 'Hugo',
      lastName: 'Perez',
      age: 32,
      enable: false
    },
    {
      name: 'Elena',
      lastName: 'Smith',
      age: 2,
      enable: true
    },
    {
      name: 'Pedro',
      lastName: 'Vaca',
      age: 42,
      enable: false
    }
  ]

  auxNumber: number = 3;
  exponent: number = 3;

  numbers = [1,2,3,4,5,6,7,8,9, 10];

  ngOnInit(){
    console.log('Pura: ', this.pura(2, 2));

    console.log('Impura: ', this.impura(2, 6));
  }

  pura(a:number,b:number){
    return a+b;
  }

  impura(a:number,b:number){
    return a+b + Math.random();
  }

}