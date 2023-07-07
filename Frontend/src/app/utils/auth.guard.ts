import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from '../services/users.service';


export const authGuard:CanActivateFn = (route, state) => {


  //const token = localStorage.getItem('token');
  const router = inject(Router);
  const _userService = inject(UsersService);
  //console.log('token aqui', token)

  if(_userService.loggedIn()){
    return true
  }else{
    router.navigate(['inicio-sesion'])
    return false
  }



    /*if(token == undefined) {
      router.navigate(['inicio-sesion'])
      return false;
    }
     return true;**/

};
