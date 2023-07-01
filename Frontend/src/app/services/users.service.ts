import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/User'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService {


  private APP_URL:string;
  private API_URI:string;

  constructor(private http: HttpClient) {
    this.APP_URL = 'http://localhost:3000/',
    this.API_URI = 'api/users'
  }

  registro(user: User): Observable<any>{
    return this.http.post(`${this.APP_URL}${this.API_URI}`, user);

  }

  getUsers() {
    return this.http.get(`${this.API_URI}/users`);
  }

  getUser(id: string) {
    return this.http.get(`${this.API_URI}/users/${id}`);
  }

  saveUser(user:User) {
    return this.http.post(`${this.API_URI}/users`, user);
  }

  updateUser(id: string, updateUser: User){
    return this.http.put(`${this.API_URI}/users/${id}`, updateUser);
  }

  getRoles():Observable<any> {
    return this.http.get(`${this.API_URI}/roles`);
  }

}
