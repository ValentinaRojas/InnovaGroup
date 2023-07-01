import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { IRol } from '../../models/Rol';
import { UsersService } from '../../services/users.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  document_type_id: number = 0;
  Numero_de_documento: number = 1;
  Nombre1: string = '';
  Nombre2: string = '';
  Apellido1: string = '';
  Apellido2: string = '';
  rol_id: number = 0;
  Fecha_nacimiento: Date = new Date;
  Direccion: string = '';
  user_name: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(private toastr: ToastrService,
    private _userService: UsersService,
    private router: Router){}

  ngOnInit(): void {}

  addUser(){
    //Validar que el usuario ingrese valores
    this.toastr.error('Campos obligatorios', 'Error');

    if(this.user_name == ' ' || this.Nombre1 == ' ' || this.Nombre1 == ' ' || this.Apellido1 == ' ' || this.Direccion == ' ' || this.password == ' ' ){
      this.toastr.error('Campos obligatorios', 'Error');
      console.log("hola")
      return; //recorta el hilo de ejecucion
    }


    //Se crea el objeto
    const user: User = {
      document_type_id: this.document_type_id,
      Numero_de_documento: this.Numero_de_documento,
      Nombre1: this.Nombre1,
      Nombre2: this.Nombre2,
      Apellido1: this.Apellido1,
      Apellido2: this.Apellido2,
      rol_id: this.rol_id,
      Fecha_nacimiento: this.Fecha_nacimiento,
      Direccion: this.Direccion,
      user_name: this.user_name,
      password: this.password
    }

    this.loading = true;

    this._userService.registro(user).subscribe(data => {
      this.loading = false;
      console.log("El usuariofue registrado con exito");
      this.toastr.success(`El usuario ${this.user_name} fue registrado con exito`, "Usuario registrado");
      this.router.navigate(['/inicio-sesion']);
    }, (event: HttpErrorResponse) =>{
      this.loading = false;
      if(event.error.msg){
        this.toastr.error(event.error.msg, 'Error');
      }else{
        this.toastr.error('Ocurrio un error ', 'Error');
      }
      console.log(event.error.msg);


    } )


  }


}
