import { Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  //@Input() age: number;
  //@Output() clickAge = new EventEmitter()

  @Input() name: string;
  @Input() age: number;
  @Input() description: string;

  @Output() clickButton = new EventEmitter()


  user:string = 'Maria';
  
  constructor() { }
  
  ngOnChanges(){
    console.log('On Changes')
  }

  ngOnInit(): void {
    console.log('On Init')
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
