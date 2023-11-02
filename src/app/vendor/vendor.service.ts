import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from './vendor.class';
import { SystemService } from '../core/system.service';


@Injectable({
  providedIn: 'root'
})
export class VendorService {

  get url() { return `${this.syssvc.config.baseurl}/api/vendors`;}

  constructor(
    private http: HttpClient,
    private syssvc: SystemService
  ) { }

  //get all vendors
  list(): Observable<Vendor[]>{
    return this.http.get(`${this.url}`) as Observable<Vendor[]>;
  }

  //get by primary key
  get(id: number): Observable<Vendor>{
    return this.http.get(`${this.url}/${id}`) as Observable<Vendor>;
  }

  //create user
  create(vend: Vendor): Observable<Vendor>{
    return this.http.post(`${this.url}`, vend) as Observable<Vendor>;
  }

  change(vend: Vendor): Observable<any>{
    return this.http.put(`${this.url}/${vend.id}`, vend) as Observable<any>;
  }

  //delete user
  remove(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
}

