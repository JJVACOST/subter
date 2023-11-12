import { Component } from '@angular/core';
import { RegistroService } from "src/app/services/registro.service"
import { Router } from "@angular/router";
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


    userFormLogin = {
        correo: '',
        password: ''
    }

    constructor(private _usuarioService: RegistroService, private router: Router){}

    ingresoUsuario(){

         this._usuarioService.postLoguearse(this.userFormLogin).subscribe(respuestaAPI => {
            console.log(respuestaAPI+'.....')

            let tokenObtenido = respuestaAPI.token


            console.log('mitoken ' +tokenObtenido)

            sessionStorage.setItem('TokenSub', respuestaAPI.token)

            this._usuarioService.postDesencripToken(tokenObtenido).subscribe(repuestaValTok => {
                console.log(repuestaValTok)
                sessionStorage.setItem('infoUser', JSON.stringify(repuestaValTok.decodedPayload))
                this.router.navigate(['/'])

            })

        }, error => {
            Swal.fire({
                icon: 'error',
                title: 'Usuario y/o contraseña errados',
                iconColor: '#ff0d0d'
            })
            console.log(error)
        })
    }


}
