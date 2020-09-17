import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProductService } from './../../shared/services/product.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-sidnav',
  templateUrl: './sidnav.component.html',
  styleUrls: ['./sidnav.component.css']
})
export class SidnavComponent implements OnInit, OnDestroy {

  products = [];

  productForm: FormGroup;

  productSubs: Subscription;
  productGetSubs: Subscription;
  productDeleteSubs: Subscription;
  productUpdateSubs: Subscription;
  
  idEdit: any;

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private authService: AuthService) {

  }

  ngOnInit(): void {

    this.loadProduct();

    this.productForm = this.formBuilder.group({
      age: '',
      color:'',
      name: ['name', [Validators.required, Validators.minLength(3)]],
      urlImage: '',
      vaccinated: ['vaccinated', [Validators.required]]
    });

  }

  loadProduct(): void {
    this.products = [];

    const userId = this.authService.getUserId();
    this.productGetSubs = this.productGetSubs = this.productService.getProductsById(userId).subscribe(res => {
      Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
    });
  }

  onDelete(id: any): void {
    this.productService.deleteProducts(id).subscribe(
      res => {
        console.log('RESPONSE: ', res);
        this.loadProduct();
      },
      err => {
        console.log('ERROR: ');
      }
    );
  }

  onEdit(product): void {
    this.idEdit = product.id;
    this.productForm.patchValue(product);
  }

  onUpdateProduct(): void {
    this.productUpdateSubs = this.productService.updateProducts(
      this.idEdit,
      {
        ...this.productForm.value,
        ownerId: this.authService.getUserId()
      }
    ).subscribe(
      res => {
        console.log('RESP UPDATE: ', res);
        this.loadProduct();
      },
      err => {
        console.log('ERROR UPDATE DE SERVIDOR');
      }
    );
  }

  onEnviar2(): void {
    this.productSubs = this.productService.addProducts({
      ...this.productForm.value,
      ownerId: this.authService.getUserId()
    }).subscribe(
      res => {
        console.log('RESP: ', res);
        this.loadProduct();
      },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    );

  }

  ngOnDestroy(): void{
    this.productSubs ? this.productSubs.unsubscribe() : '';
    this.productGetSubs ? this.productGetSubs.unsubscribe() : '';
     this.productDeleteSubs ? this.productDeleteSubs.unsubscribe() : '';
    this.productUpdateSubs ? this.productUpdateSubs.unsubscribe() : '';
  }

}