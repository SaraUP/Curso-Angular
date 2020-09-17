import { Component, Input,  OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProductService } from '../../shared/services/product.service';
import {AdminComponent} from '../admin.component';

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

  pets = [];

  petsForm: FormGroup;
  petsSubs: Subscription;
  petsGetSubs: Subscription;
  petsUpdateSubs: Subscription;
  petsDeleteSubs: Subscription;

  idEdit: any;

  cart = [];

  animalsVaccinated = [];
  animalsNotVaccinated = [];

  constructor(private adminComponent: AdminComponent, private productService: ProductService) {}

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

  onEdit(pet): void{
    this.idEdit = pet.id;
    this.petsForm.patchValue(pet);
    
    window.location.reload();
  }

  onUpdate(): void{
    this.petsUpdateSubs = this.productService.updateProducts(this.idEdit, this.petsForm.value).subscribe(
      res => {
        console.log('RESP UPDATE: ', res);
        window.location.reload();
      },
      err => {
        console.log('ERROR UPDATE DE SERVIDOR');
      }
    );
  }

  onEnviar(): void{
    this.petsSubs = this.productService.addProducts(this.petsForm.value).subscribe(
      res => {
        console.log('RESP: ', res);
        window.location.reload();
      },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    );
  }

  onDelete(id: any): void {
    this.adminComponent.onDelete(id);
  }
  ngOnDestroy(): void{
    
  }

}