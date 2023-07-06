import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token_body = JSON.parse(localStorage.getItem('token') || '{}');
    const token = token_body['token']

    if(token){
      console.log('get token', token);
      console.log('hola');
      request = request.clone({ setHeaders:{ Authorization: `Bearer ${token}`}})
    }
    return next.handle(request);
  }
}
