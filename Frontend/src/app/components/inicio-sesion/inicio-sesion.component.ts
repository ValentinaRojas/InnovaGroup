import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  users: any = [];

  inicioSesion: any = {};

  submitInicioSesion() {
    // Aquí puedes manejar la lógica para enviar los datos de inicio de sesión al servidor
    console.log('Inicio de Sesión:', this.inicioSesion);
  }



  constructor(private userService: UsersService) {
  }


  ngOnInit() {
    this.userService.getUsers().subscribe(
      res => {
        this.users = res;
      },
      err => console.log(err)
    )

    this.userService.getRoles().subscribe(
      res => console.log(res),
      err => console.log(err)
    )

  }
}
