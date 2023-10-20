import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './request.class';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  url: string = "http://localhost:5566/api/requests";

  constructor(
    private http: HttpClient
  ) { }


  //get all requests
  list(): Observable<Request[]>{
    return this.http.get(`${this.url}`) as Observable<Request[]>;
  }

  //get by primary key
  get(id: number): Observable<Request>{
    return this.http.get(`${this.url}/${id}`) as Observable<Request>;
  }

  //create user
  create(req: Request): Observable<Request>{
    return this.http.post(`${this.url}`, req) as Observable<Request>;
  }

  change(req: Request): Observable<any>{
    return this.http.put(`${this.url}/${req.id}`, req) as Observable<any>;
  }

  //change status to review
  review(req: Request): Observable<any>{
    return this.http.put(`${this.url}/review/${req.id}`, req) as Observable<any>
  }

  //delete user
  remove(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
}

