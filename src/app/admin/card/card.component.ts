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

  productDeleteSubs: Subscription;

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

  onDelete(id: any): void {
    this.productService.deleteProducts(id).subscribe(
      res => {
        console.log('RESPONSE: ', res);
        window.location.reload();
      },
      err => {
        console.log('ERROR: ');
      }
    );
  }

  ngOnDestroy(): void{
    this.productDeleteSubs ? this.productDeleteSubs.unsubscribe() : '';
  }

}