import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  //nameControl = new FormControl();

  productForm: FormGroup;

  productSubs: Subscription;

  constructor(private formBuilder: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {

    this.productForm = this.formBuilder.group({
      description: ['description', [Validators.required, Validators.minLength(3)]],
      imageUrl: '',
      ownerId: '',
      price: '',
      title: ''
    });

  }

  /*onEnviar() {
    console.log('VALOR: ', this.nameConatrol.value);
  }*/

  onEnviar2(): void {
    console.log('FORM GROUP: ', this.productForm.value);

    this.productSubs = this.productService.addProducts(this.productForm.value).subscribe(
      res => {
        console.log('RESP: ', res);
      },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    );
  }

  ngOnDestroy(): void{
    this.productSubs.unsubscribe();
  }

}