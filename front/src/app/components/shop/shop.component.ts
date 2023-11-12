import { Component, OnInit } from '@angular/core';
import {ProductosService} from 'src/app/services/productos.service';
import {productos} from 'src/app/models/productos';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

    listaProductos: productos[] = [];

    constructor(private _productosService: ProductosService){

    }

    ngOnInit() : void {
        this.misproductos()
    }

    misproductos(){
        this._productosService.getProductosAct().subscribe(data =>{
            this.listaProductos = data
            console.log(this.listaProductos)

        },error=>{
            console.log(error)
        }

        )
    }


    verProduct(miid: any) {
       
    }

}
