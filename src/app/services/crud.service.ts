import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CrudService {

  constructor(private http: HttpClient) { 

  }

  public getPets(): Observable<any> {
    return this.http.get('https://veterinary-test.firebaseio.com/pets.json');
  }

  public addPets(product:any): Observable<any>{
    return this.http.post('https://veterinary-test.firebaseio.com/pets.json', product);
  }

  public updatePets(id: any, product: any): Observable<any>{
    return this.http.put(`https://veterinary-test.firebaseio.com/pets/${id}.json`, product);
  }

  public deletePets(id: any): Observable<any>{
    return this.http.delete(`https://veterinary-test.firebaseio.com/pets/${id}.json`);
  }

}