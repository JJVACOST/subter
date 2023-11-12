import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/services/registro.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    constructor(public _registroService: RegistroService, private router: Router){}

    cerrarSesion(){
        sessionStorage.removeItem('TokenSub')
        this.router.navigate(['/login'])
    }

}
