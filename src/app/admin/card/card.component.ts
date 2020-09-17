import { Component, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  products = [];

  productSubs: Subscription;

  homeSubs: Subscription;

  cart = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void{
    this.productSubs = this.productService.getProducts().subscribe(
      res => {
        console.log('Respuesta: ', res);
        console.log('RESPUESTA: ', Object.entries(res));

        Object.entries(res).map(p => this.products.push(p[1]));
      }
    );
  }

}