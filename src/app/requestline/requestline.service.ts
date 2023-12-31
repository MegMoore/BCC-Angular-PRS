import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestLine } from './requestline.class';
import { SystemService } from '../core/system.service';


@Injectable({
  providedIn: 'root'
})
export class RequestlineService {

  get url() { return `${this.syssvc.config.baseurl}/api/requestlines`;}

  constructor(
    private http: HttpClient,
    private syssvc: SystemService
  ) { }

 

  //get all requestlines
  list(): Observable<RequestLine[]>{
    return this.http.get(`${this.url}`) as Observable<RequestLine[]>;
  }

  //get by primary key
  get(id: number): Observable<RequestLine>{
    return this.http.get(`${this.url}/${id}`) as Observable<RequestLine>;
  }

  //create requestline
  create(reql: RequestLine): Observable<RequestLine>{
    return this.http.post(`${this.url}`, reql) as Observable<RequestLine>;
  }

  change(reql: RequestLine): Observable<any>{
    return this.http.put(`${this.url}/${reql.id}`, reql) as Observable<any>;
  }

  //delete user
  remove(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
}
