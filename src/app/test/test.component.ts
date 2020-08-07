import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  //@Input() age: number;
  //@Output() clickAge = new EventEmitter()

  @Input() name: String;
  @Input() age: number;
  @Input() description: String;

  @Output() clickButton = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClickSave(){
    //this.clickAge.emit('Hiciste click');
    this.clickButton.emit({
      name: this.name,
      age: this.age,
      description: this.description
    })
  }

}
