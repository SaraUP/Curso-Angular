import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChange} from '@angular/core';

@Component({
  selector: 'person',
  template:`
  <div style="border: 1px solid red;">
  <p>TEST COMPONENT</p>  
  <p>NAME: {{name}}</p>
  <p>NAME: {{lastName}}</p>
  </div>
  `,
  styles: [
    
  ]
})
export class TestComponent implements OnInit, OnChanges,  OnDestroy{

  //@Input() age: number;
  //@Output() clickAge = new EventEmitter()

  //@Input() name: string;
  //@Input() age: number;
  //@Input() description: string;

  //@Output() clickButton = new EventEmitter()


  //user:string = 'Maria';


  //Interceptar propiedades de input
  intermediaria: string;
  
  @Input()
  get name(){
    return this.intermediaria;
  }
  set name(name:string){
    this.intermediaria = 'hola '+name;
  }

  @Input() lastName:string;
  
  constructor() { }

  ngOnInit() {
    console.log('On Init', this.name)
  }

  ngOnChanges(changes: SimpleChange){
    if(changes && changes.lastName && changes.lastName.currentValue){
      console.log('On Changes', changes.lastName.currentValue);
      const aux = "Bye " + changes.lastName.currentValue;
      this.lastName = aux;
    }
  }

  ngOnDestroy(){
    console.log('OnDestroy')
  }

}
