import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../../services/crud.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-veterinaria',
  templateUrl: './veterinaria.component.html',
  styleUrls: ['./veterinaria.component.css']
})
export class VeterinariaComponent implements OnInit, OnDestroy {

  pets = [];

  vacunados = [];
  animalsVaccinated = [];
  animalsNotVaccinated = [];
  noVacunadosString = [];

  petsForm: FormGroup;

  petsSubs: Subscription;
  petsGetSubs: Subscription;
  petsUpdateSubs: Subscription;
  petsDeleteSubs: Subscription;

  idEdit: any;

  constructor(private formBuilder: FormBuilder, private crud: CrudService) { }

  loadPets(): void{
    this.pets = [];

    this.crud.getPets().subscribe(
      res => {
        Object.entries(res).map((p: any) => this.pets.push({id: p[0], ...p[1]}));
        this.animalsVaccinated = this.pets.filter(animal => animal.vaccinated === true || animal.vaccinated === 'true');
    this.animalsNotVaccinated = this.pets.filter(animal =>  animal.vaccinated === false || animal.vaccinated === 'false');;
      }
    );
  }

  ngOnInit(): void {
    this.loadPets();

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
    this.crud.deletePets(id).subscribe(
      res => {
        console.log('RESPONSE: ', res);
        this.loadPets();
      },
      err => {
        console.log('ERROR: ');
      }
    );
  }

  onEdit(pet): void{
    this.idEdit = pet.id;
    this.petsForm.patchValue(pet);
    
    this.loadPets();
  }

  onUpdate(): void{
    this.petsUpdateSubs = this.crud.updatePets(this.idEdit, this.petsForm.value).subscribe(
      res => {
        console.log('RESP UPDATE: ', res);
        this.loadPets();
      },
      err => {
        console.log('ERROR UPDATE DE SERVIDOR');
      }
    );
  }

  onEnviar(): void{
    this.petsSubs = this.crud.addPets(this.petsForm.value).subscribe(
      res => {
        console.log('RESP: ', res);
        this.loadPets();
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