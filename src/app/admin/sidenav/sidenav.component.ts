import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, OnDestroy {

  pets = [];

  petsForm: FormGroup;
  petsSubs: Subscription;
  petsGetSubs: Subscription;
  petsUpdateSubs: Subscription;
  petsDeleteSubs: Subscription;

  idEdit: any;

  constructor(private formBuilder: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {

    this.petsForm = this.formBuilder.group(
      {
        age: '',
        color: '',
        name: ['',[Validators.required, Validators.minLength(3)]],
        urlImage: '',
        vaccinated: [false, Validators.required]
      }
    )
  }

  onDelete(id: any): void {
    this.petsDeleteSubs = this.productService.deleteProducts(id).subscribe(
      res => {
        console.log(res);
        window.location.reload();
      },
      err => {
        console.log('ERROR DE SERVIDOR');
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

  ngOnDestroy(): void{
    this.petsSubs ? this.petsSubs.unsubscribe() : '';
    this.petsGetSubs ? this.petsGetSubs.unsubscribe() : '';
     this.petsDeleteSubs ? this.petsDeleteSubs.unsubscribe() : '';
    this.petsUpdateSubs ? this.petsUpdateSubs.unsubscribe() : '';
  }

}