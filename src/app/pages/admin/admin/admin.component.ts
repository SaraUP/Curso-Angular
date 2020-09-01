import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  //nameControl = new FormControl();

  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      description:['description', [Validators.required, Validators.minLength(3)]],
      imageURL: 'image',
      ownerId: 'owner',
      price: 'price',
      title: 'title'
    });
  }

  /*onEnviar(){
    console.log('Valor: ', this.nameControl.value);
  }*/

  onEnviar2(): void{
    console.log('Form Group: ', this.productForm.value);
  }

}