import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { productos } from "src/app/models/productos"
import { ProductosService } from 'src/app/services/productos.service';
import { ActivatedRoute, Router } from "@angular/router";
import Swal from 'sweetalert2'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addCarrito } from 'src/app/redux-carrito/actions.carrito';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit{

    misproductos: productos[] = [];

    ////problemas con el tipo de dato string, debi poner any
    idprodUrl!: string|null

    myurlImg: string =''
    mynombre: string =''
    mydescr: string =''
    myprice: string =''
    myid: string =''

    myitem: any

    detailProds:FormGroup
    sc:Observable<any[]>

    constructor(private _productoService: ProductosService, private fb: FormBuilder, private router: Router, private idProdRoute: ActivatedRoute, private store: Store<{sc:any}>) {
        this.detailProds = this.fb.group({
            nombre: ['', Validators.required],
            descripcion: ['', Validators.required],
            precio: ['', Validators.required],
            categoria: ['', Validators.required],
            status: ['', Validators.required]

        })

        this.sc = store.select('sc')

        this.idprodUrl = this.idProdRoute.snapshot.paramMap.get('id')

        console.log(this.idprodUrl)

    }

    ngOnInit(): void {
       this.buscarproduct()
    }


    buscarproduct() {

        this._productoService.getProducto(this.idprodUrl).subscribe(data => {
            this.myurlImg = data.urlImg
            this.mynombre = data.nombre
            this.mydescr = data.descripcion
            this.myprice = data.precio
            this.myid = data._id

            this.myitem = data


        }, error => {
            this.router.navigate(['/404'])
        })
    }

    agregarCarrito(product:any){
        console.log(product)

        this.store.dispatch(addCarrito(product))

    }
}


