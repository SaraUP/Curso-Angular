import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'persona',
  template:`
  <div style="border: 1px solid red;">
  <p>TEST 2</p>
  
  <input type="text" [(ngModel)]="name">
  
  <p>Valor: {{name}}</p>

  </div>
  `,
  styles: [
    
  ]
})
export class TestComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  //@Input() age: number;
  //@Output() clickAge = new EventEmitter()

  //@Input() name: string;
  //@Input() age: number;
  //@Input() description: string;

  //@Output() clickButton = new EventEmitter()


  //user:string = 'Maria';
  @Input() name:string;
  
  constructor() { }

  ngOnInit(): void {
    console.log('On Init')
  }

  ngOnChanges(){
    console.log('On Changes')
  }

  ngDoCheck(){
    console.log('Do Check')
  }

  ngAfterContentInit(){
    console.log('AfterContentInit')
  }

  ngAfterContentChecked(){
    console.log('AfterContentChecked')
  }

  ngAfterViewInit(){
    console.log('AfterViewInit')
  }

  ngAfterViewChecked(){
    console.log('AfterViewChecked')
  }

  ngOnDestroy(){
    console.log('OnDestroy')
  }

  //onClickSave(){
    //this.clickAge.emit('Hiciste click');

    //this.clickButton.emit({
      //name: this.name,
      //age: this.age,
      //description: //this.description
    //})
  //}

}
