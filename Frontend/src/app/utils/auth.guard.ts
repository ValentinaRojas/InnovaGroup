import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGuard:CanActivateFn = (route, state) => {

  const token = localStorage.getItem('token');
  const router = inject(Router);
  console.log('token aqui', token)
    if(token == undefined) {
      router.navigate(['inicio-sesion'])
      return false;
    }
     return true;

};
