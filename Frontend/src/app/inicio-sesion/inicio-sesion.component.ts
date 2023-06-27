import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  inicioSesion: any = {};

  submitInicioSesion() {
    // Aquí puedes manejar la lógica para enviar los datos de inicio de sesión al servidor
    console.log('Inicio de Sesión:', this.inicioSesion);
  }
}
