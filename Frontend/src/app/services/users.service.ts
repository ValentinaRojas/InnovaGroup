import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/User'
import { UserLogin } from '../models/UserLogin'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService {


  private APP_URL:string;

  constructor(private http: HttpClient) {
    this.APP_URL = 'http://localhost:3000/api'
  }

  registro(user: User): Observable<any>{
    return this.http.post(`${this.APP_URL}/users`, user);
  }

  //Recibe un usuario como parámetro y va a devolver un observable con un string que es el token
  inicio_sesion(userlogin: UserLogin): Observable<string> {
    console.log(userlogin);
    return this.http.post<string>(`${this.APP_URL}/login`, userlogin);
  }

  getUser(id: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.APP_URL}/users/${id}`);
  }

  /*getUsers() {
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
  }*/

}
