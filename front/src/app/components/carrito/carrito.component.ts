import { Component, OnInit } from '@angular/core';
import { Store, on } from "@ngrx/store"
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

    sc:Observable<any[]>
    detalle:any[] = []

    constructor( private store: Store<{sc:any}>){

        this.sc = store.select('sc')

        this.detalle.push((this.sc))

        console.log(this.detalle)


    }

    ngOnInit(): void {
        this.detalle.forEach(element => {
          console.log(element, "nuevo")
        });
     }




}
