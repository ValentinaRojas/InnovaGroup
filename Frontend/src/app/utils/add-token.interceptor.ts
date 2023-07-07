import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token_body = JSON.parse(localStorage.getItem('token') || '{}');
    const token = token_body['token']
    const token_value = token_body['userid']

    if(token){
      console.log('get token', token);
      console.log('hola');
      console.log('prueba',token_value);
      request = request.clone({ setHeaders:{ Authorization: `Bearer ${token}`}})
    }
    return next.handle(request);
  }
}
