import { Component, Input,  OnChanges,    OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {

  petsGetSub: Subscription;

  searchForm: FormGroup;

  searchText = '';

  searched:any;
  searchedSend:any;

  
  animalsVaccinated = [];
  animalsNotVaccinated = [];

  constructor(private productService: ProductService, private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      search: this.searchText
    });
  }


loadPets() {
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

  search2() {

    this.searchedSend = this.searched.toLowerCase();
    if (this.searchedSend) {
      this.animalsVaccinated = this.products.filter(animal => animal.vaccinated === true || animal.vaccinated === 'true');
        this.animalsNotVaccinated = this.products.filter(animal =>  animal.vaccinated === false || animal.vaccinated === 'false');;
    } else {
      
    this.loadPets()
    }
  }

  ngOnInit(): void {
    this.loadPets();

    this.searchForm = this.formBuilder.group(
      {
        age: '',
        color: '',
        name: ['',[Validators.required, Validators.minLength(3)]],
        urlImage: '',
        vaccinated: [false, Validators.required]
      }
    )
  }

  


  products = [];

  productSubs: Subscription;

  productDeleteSubs: Subscription;

  homeSubs: Subscription;

  cart = [];


  

  //ngOnInit(): void{
    //this.productSubs = this.productService.getProducts().subscribe(
      //res => {
       // console.log('Respuesta: ', res);
        //console.log('RESPUESTA: ', Object.entries(res));

       // Object.entries(res).map(p => this.products.push(p[1]));

       // this.animalsVaccinated = this.products.filter(animal => animal.vaccinated === true || animal.vaccinated === 'true');
       // this.animalsNotVaccinated = this.products.filter(animal =>  /animal.vaccinated === false || animal.vaccinated === 'false');;
    //  }
 ////   );
//  }

  onDelete(id: any): void{
    this.productDeleteSubs = this.productService.deleteProducts(id).subscribe(
      res => {
        window.location.reload();
      },
      error => {
        console.log('ERROR', error);
      }
    );
  }
}