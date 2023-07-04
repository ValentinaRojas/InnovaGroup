import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeDoc } from '../models/TypeDoc';

@Injectable({
  providedIn: 'root'
})
export class TipoDocService {

  private APP_URL:string;

  constructor(private http: HttpClient) {
    this.APP_URL = 'http://localhost:3000/api'
  }

  getTypeDoc(): Observable<TypeDoc[]>{
    return this.http.get<TypeDoc[]>(`${this.APP_URL}/document_type`)
  }
}
