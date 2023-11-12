import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { productos } from "src/app/models/productos"
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-crearproductos',
    templateUrl: './crearproductos.component.html',
    styleUrls: ['./crearproductos.component.css']
})

export class CrearproductosComponent implements OnInit {

    @ViewChild("btnCerrar") btnCerrar!: ElementRef
    @ViewChild("btnSub") btnSub!: ElementRef
    @ViewChild("myid") myid!: ElementRef

    tituloModal: string = "Crear producto"
    buttonModal: string = "Crear"

    listaProductos: productos[] = [];


    formularioProductos: FormGroup
    rgexAlfabetico = /^[A-Za-z ]+$/
    rgexNombreProd = /^[A-Za-z ]{10,30}$/
    rgexAlfaNumerico = /^[A-Za-z 0-9]+$/
    rgexNumerico = /^[0-9]+$/
    rgexemail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    rgexlength = /d{10,20}$/



    constructor(private _productoService: ProductosService, private fb: FormBuilder) {
        this.formularioProductos = this.fb.group({
            nombre: ['', [Validators.required, Validators.pattern(this.rgexNombreProd)]],
            descripcion: ['', Validators.required],
            precio: ['', [Validators.required, Validators.pattern(this.rgexNumerico)]],
            urlImg: ['', Validators.required],
            categoria: ['', Validators.required],
            status: ['', Validators.required]

        })


    }

    ngOnInit(): void {
        this.misproductos()
    }

    enviaform() {
        let productosFormulario: productos = this.formularioProductos.value
        let idprod = this.myid.nativeElement.value

        console.log('Valor-->', idprod)
        if (idprod == null || idprod == "") {
            this._productoService.postProducto(productosFormulario).subscribe(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Producto creado',
                })
                this.limpiarFormulario()
                this.misproductos()
                this.btnCerrar.nativeElement.click()

            }, error => {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'inicia sesion para continuar',
                })
            })
        } else {
            this._productoService.putProducto(idprod, productosFormulario).subscribe(() => {
                console.log("resapi")
                Swal.fire({
                    icon: 'success',
                    title: 'Producto Actualizado',
                })
                this.limpiarFormulario()
                this.misproductos()
                this.btnCerrar.nativeElement.click()

            }, error => {
                console.log(error)
            })
        }
    }

    actualizarStatus(miid: any) {
        let statusProd = ''
        let newStatusProd = {}
        this._productoService.getProducto(miid).subscribe(data => {
            data.status = (data.status == "Activo") ? "Inactivo" : "Activo"

            this._productoService.putProducto(miid, data).subscribe(resapi => {
                Swal.fire({
                    icon: 'success',
                    title: 'Status Actualizado, producto '+ data.status,
                })
                this.misproductos()

            }, error => {
                console.log(error)
            })
        }, error => {
            console.log(error)
        })



        console.log(newStatusProd)




    }
    limpiarFormulario() {
        this.formularioProductos.reset()
    }


    misproductos() {
        this._productoService.getProductos().subscribe(data => {
            this.listaProductos = data
            console.log(this.listaProductos)

        }, error => {
            console.log(error)
        }

        )
    }

    buscarproduct(miid: any) {
        this._productoService.getProducto(miid).subscribe(data => {
            let misproductos = data


            this.formularioProductos.get("nombre")?.setValue(misproductos.nombre)
            this.formularioProductos.get("descripcion")?.setValue(misproductos.descripcion)
            this.formularioProductos.get("precio")?.setValue(misproductos.precio)
            this.formularioProductos.get("urlImg")?.setValue(misproductos.urlImg)
            this.formularioProductos.get("status")?.setValue(misproductos.status)
            this.formularioProductos.get("categoria")?.setValue(misproductos.categoria)
            this.myid.nativeElement.value = misproductos._id





            this.tituloModal = "Editar Producto"
            this.buttonModal = "Actualizar"

        }, error => {
            console.log(error)
        })
    }

    resetForm() {
        this.tituloModal = "Crear Producto"
        this.buttonModal = "Crear"
        this.myid.nativeElement.value = null

    }

}

