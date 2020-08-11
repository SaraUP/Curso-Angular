import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'curso-angular';

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

  ngOnInit(){

  }

}