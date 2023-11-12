import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usuarios } from "src/app/models/usuarios"

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

   url = 'http://localhost:5000/api/v1'

    /*url = 'http://a-s-g-subterranea-1-bad8e4de000741f0.elb.us-east-1.amazonaws.com:5000/api/v1'*/


  constructor(private http:HttpClient) { }

    // falta revisar aqui
    getUsuarios():Observable<any>{
        return this.http.get(`${this.url}/obtener-usuarios`)
    }

    getUsuario(miusuario:string|null):Observable<any>{
        return this.http.get(`${this.url}/obtener-usuario/${miusuario}`)
    }

    postUsuario(usuario:usuarios):Observable<any>{
        return this.http.post(`${this.url}/crear-usuarios`, usuario)
    }


    postLoguearse(datalog : object): Observable<any>{

        return this.http.post(`${this.url}/login`, datalog)

    }

    logueoValido(){

        if(sessionStorage.getItem('TokenSub') != null){
             return true
         }else{
             return false
         }
    }


    postDesencripToken(token:string):Observable<any>{
        return this.http.post(`${this.url}/infoToken`, {tokenUser: token})
    }
}
