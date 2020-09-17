import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class ProductService {

  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {

  }

  public getProducts(): Observable<any> {
    return this.http.get(`${this.url}/pets.json`);
  }

  public addProducts(product: any): Observable<any> {
    return this.http.post(`${this.url}/pets.json`, product);
  }

  public deleteProducts(id: any): Observable<any> {
    return this.http.delete(`${this.url}/pets/${id}.json`);
  }

  public updateProducts(id: any, product: any): Observable<any> {
    return this.http.put(`${this.url}/pets/${id}.json`, product);
  }

  public getProductsById(id: any): Observable<any> {
    return this.http.get(`${this.url}/pets.json?orderBy="ownerId"&equalTo="${id}"&print=pretty`);
  }

}