import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  //nameControl = new FormControl();

  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private productService: ProductService) { }

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

    this.productService.addProducts(this.productForm.value).subscribe(res => {
      console.log('Res: ', res)
    });
  }

}