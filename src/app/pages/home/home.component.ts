import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from './../../shared/services/product.service';
import { Store } from '@ngrx/store';
import { AddProduct } from './store/home.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  products = [];

  productSubs: Subscription;

  constructor(private productService: ProductService, private store: Store<any>) {}

  ngOnInit(): void{
    this.productSubs = this.productService.getProducts().subscribe(res => {
      console.log('RESPUESTA: ', res);
      console.log('RESPUESTA: ', Object.entries(res));

      Object.entries(res).map(p => this.products.push(p[1]));
    });
  }

  ngOnDestroy(): void{
    this.productSubs ? this.productSubs.unsubscribe() : '';
  }

  onComprar(product): void {
    this.store.dispatch(AddProduct({product: product}));
  }

}