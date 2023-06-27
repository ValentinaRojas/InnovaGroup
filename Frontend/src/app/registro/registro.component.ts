import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registro: any = {};

  submitRegistro() {
    // Aquí puedes manejar la lógica para enviar los datos de registro al servidor
    console.log('Registro:', this.registro);
  }
}
