import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-primer-parcial',
  templateUrl: './primer-parcial.component.html',
  styleUrls: ['./primer-parcial.component.css']
})
export class PrimerParcialComponent implements OnInit {

  @Input() nombre:string;
  @Input() edad:number;
  @Input() habilitado:any;

  constructor() { }

  ngOnInit() {
  }

}