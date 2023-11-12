import {Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms'
import {usuarios} from "src/app/models/usuarios"
import {RegistroService} from 'src/app/services/registro.service';
import { ActivatedRoute, Router } from "@angular/router";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

    formularioRegistro: FormGroup
    rgexAlfabetico = /^[A-Za-z 0-9]+$/
    rgexNumerico = /^[0-9]+$/
    rgexemail = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    rol_usuario: string = "cliente"

    constructor(private fb:FormBuilder, private _registroService:RegistroService,  private router: Router){
        this.formularioRegistro = this.fb.group({
            nombre:['', [Validators.required, Validators.pattern(this.rgexAlfabetico)]],
            telefono:['',[Validators.required, Validators.pattern(this.rgexNumerico)]],
            correo:['', [Validators.required, Validators.pattern(this.rgexemail)]],
            password:['',Validators.required],
            rol:['',Validators.required]
        })
    }

    ngOnInit(): void {
        
    }

    enviaform(){

        let formRegistro : usuarios = this.formularioRegistro.value

        console.log(formRegistro)

        this._registroService.postUsuario(formRegistro).subscribe(data => {
            Swal.fire({
                icon: 'success',
                title: 'Usuario creado',
            })
            this.router.navigate(['/login'])

        }, error => {

            Swal.fire({
                icon: 'error',
                title: 'El usuario ya existe',
            })
            console.log(error)
        })
    }
}
