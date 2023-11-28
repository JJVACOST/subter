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


    constructor( private store: Store<{sc:any}>){

        this.sc = store.select('sc')

        console.log(this.sc)

    }

    ngOnInit(): void {

     }




}
