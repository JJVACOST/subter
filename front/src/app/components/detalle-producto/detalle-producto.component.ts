import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { productos } from "src/app/models/productos"
import { ProductosService } from 'src/app/services/productos.service';
import { ActivatedRoute, Router } from "@angular/router";
import Swal from 'sweetalert2'

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

    detailProds:FormGroup

    constructor(private _productoService: ProductosService, private fb: FormBuilder, private router: Router, private idProdRoute: ActivatedRoute) {
        this.detailProds = this.fb.group({
            nombre: ['', Validators.required],
            descripcion: ['', Validators.required],
            precio: ['', Validators.required],
            categoria: ['', Validators.required],
            status: ['', Validators.required]

        })


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


        }, error => {
            this.router.navigate(['/404'])
        })
    }

    agregarCarrito(id:any){}
}


