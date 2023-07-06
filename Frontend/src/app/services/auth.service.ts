import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  iniciar_sesion(user:any){
    return this.http.get(`${this.URL}/api/users/`, user)
  }

}
