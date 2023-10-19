import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string = "http://localhost:5566/api/products";

  constructor(
    private http: HttpClient
  ) { }



  //get all products
  list(): Observable<Product[]>{
    return this.http.get(`${this.url}`) as Observable<Product[]>;
  }

  //get by primary key
  get(id: number): Observable<Product>{
    return this.http.get(`${this.url}/${id}`) as Observable<Product>;
  }

  //create user
  create(prod: Product): Observable<Product>{
    return this.http.post(`${this.url}`, prod) as Observable<Product>;
  }

  change(prod: Product): Observable<any>{
    return this.http.put(`${this.url}/${prod.id}`, prod) as Observable<any>;
  }

  //delete user
  remove(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
}
