import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Rol } from 'src/app/models/Rol';
import { TypeDoc } from 'src/app/models/TypeDoc';
import { User } from 'src/app/models/User';
import { UserLogin } from 'src/app/models/UserLogin';
import { RolService } from 'src/app/services/rol.service';
import { TipoDocService } from 'src/app/services/tipo_doc.service';
import { UsersService } from 'src/app/services/users.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {




  listTypeDoc: TypeDoc[] = [];
  listRol: Rol[] = [];
  users: User[] = [];
  user: User[] = [];

  constructor(private _typeDocService: TipoDocService,
     private _rolService: RolService,
      private http:HttpClient,
      private _userService: UsersService,
    ){}

    userUpdate = {
      Numero_de_documento: 0,
      Nombre1: '',
      Nombre2: '',
      Apellido1: '',
      Apellido2: '',
      rol_id: 2,
      Fecha_nacimiento: new Date,
      Direccion: '',
      user_name: '',
      password: '',

    }




  ngOnInit(): void {

    this.getTypeDoc();
    this.getRoles();
    //this.getUsers();
    this.getUser(this.token);
    //this.updateUser()
  }


  getTypeDoc(){
    this._typeDocService.getTypeDoc().subscribe(data => {
      this.listTypeDoc = (data);
      console.log(data);
    })
  }

  getRoles(){
    this._rolService.getRoles().subscribe(data => {
      this.listRol = (data);
      console.log(data);
    })
  }

  /*getUsers(){
    this._userService.getUsers().subscribe(data => {
      this.users = (data);
      console.log(data);
    })
  }*/


  token_body = JSON.parse(localStorage.getItem('token') || '{}');
  token = this.token_body['userid'];

  getUser(id:number){
    this._userService.getUser(id).subscribe(data => {
      this.user = data;
      console.log('aqui',data[0]);
      console.log('Nombre', this.user[0].document_type_id)
    })


  }

  updateUser(id:number, value: any){
    this.userUpdate = value;
}




}
