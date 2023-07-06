import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Rol } from 'src/app/models/Rol';
import { TypeDoc } from 'src/app/models/TypeDoc';
import { User } from 'src/app/models/User';
import { UserLogin } from 'src/app/models/UserLogin';
import { RolService } from 'src/app/services/rol.service';
import { TipoDocService } from 'src/app/services/tipo_doc.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  listTypeDoc: TypeDoc[] = [];
  listRol: Rol[] = [];
  users: User[] = [];

  constructor(private _typeDocService: TipoDocService, private _rolService: RolService, private http:HttpClient){

  }

  ngOnInit(): void {

    this.getTypeDoc();
    this.getRoles();
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




}
