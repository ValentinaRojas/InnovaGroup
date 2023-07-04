import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { UsersService } from '../../services/users.service';
import { UserLogin } from 'src/app/models/UserLogin';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})

export class InicioSesionComponent implements OnInit {

  user_name: string = '';
  password: string = '';
  loading: boolean = false;


  //Convenciones, los servicios suelen comenzar con _
  constructor(private toastr: ToastrService , private _userService: UsersService,
    private router: Router){

  }

  ngOnInit(): void {

  }

  inicio_sesion() {

    //Validamos que el usuario ingrese datos

    if(this.user_name == '' || this.password == ''){
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return
    }

    //Creamos el objeto(body)
    const userlogin: UserLogin = {
      user_name: this.user_name,
      password: this.password
    }


    this.loading = true;
    this._userService.inicio_sesion(userlogin).subscribe({
      next: (data) => {
        console.log(data);
        //token = JSON.stringify(token);
        localStorage.setItem('token', data);
        console.log(data);
        this.router.navigate(['/perfil']);
      },
      error: (e: HttpErrorResponse) => {
        this.msjError(e);
        this.loading = false;
      }
    })
  }


  msjError(e: HttpErrorResponse){
    this.loading = false;
      if(e.error.msg){
        this.toastr.error(e.error.msg, 'Error');
      }else{
        this.toastr.error('Ocurrio un error ', 'Error');
      }
      console.log(e.error.msg)
  }


}
