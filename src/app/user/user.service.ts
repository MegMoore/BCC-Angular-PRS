import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://localhost:5566/api/users";

  constructor(
    private http: HttpClient
  ) { }

  //get all users
  list(): Observable<User[]>{
    return this.http.get(`${this.url}`) as Observable<User[]>;
  }

  //get by primary key
  get(id: number): Observable<User>{
    return this.http.get(`${this.url}/${id}`) as Observable<User>;
  }

  //create user
  create(use: User): Observable<User>{
    return this.http.post(`${this.url}`, use) as Observable<User>;
  }

  change(use: User): Observable<any>{
    return this.http.put(`${this.url}/${use.id}`, use) as Observable<any>;
  }

  //delete user
  remove(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
}
