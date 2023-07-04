import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from '../models/Rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private APP_URL:string;

  constructor(private http: HttpClient) {
    this.APP_URL = 'http://localhost:3000/api'
  }

  getRoles(): Observable<Rol[]>{
    return this.http.get<Rol[]>(`${this.APP_URL}/roles`)
  }



}
