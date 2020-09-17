import { Component, Input,  OnInit} from '@angular/core';
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

  animalsVaccinated = [];
  animalsNotVaccinated = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void{
    this.productSubs = this.productService.getProducts().subscribe(
      res => {
        console.log('Respuesta: ', res);
        console.log('RESPUESTA: ', Object.entries(res));

        Object.entries(res).map(p => this.products.push(p[1]));

        this.animalsVaccinated = this.products.filter(animal => animal.vaccinated === true || animal.vaccinated === 'true');
        this.animalsNotVaccinated = this.products.filter(animal =>  animal.vaccinated === false || animal.vaccinated === 'false');;
      }
    );
  }

  onDelete(id: any): void {
    this.productService.deleteProducts(id);
  }

  ngOnDestroy(): void{
    
  }

}