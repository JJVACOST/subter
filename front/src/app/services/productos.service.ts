import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productos} from "src/app/models/productos"

@Injectable({
  providedIn: 'root'
})
export class ProductosService {



    url = 'http://localhost:5000/api/v1'

    /*url = 'http://a-s-g-subterranea-1-bad8e4de000741f0.elb.us-east-1.amazonaws.com:5000/api/v1'*/

  constructor(private http:HttpClient) {}

        getProductos():Observable<any>{
            return this.http.get(`${this.url}/obtener-productos`)

        }
        getProductosAct():Observable<any>{
            return this.http.get(`${this.url}/obtener-productosAct`)

        }
        getProducto(miproducto:string|null):Observable<any>{
            return this.http.get(`${this.url}/obtener-producto/${miproducto}`)

        }
        postProducto(producto:productos):Observable<any>{
            const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('TokenSub')}`)
            //necesito orgabizar la api con body y authorization
            return this.http.post(`${this.url}/crear-productos`,  producto, {headers})


        }
        putProducto(miproducto: string, dataProd: productos):Observable<any>{
            return this.http.put(`${this.url}/actualizar-producto/${miproducto}`,dataProd)

        }
        deleteProducto():Observable<any>{
            return this.http.delete('${this.url}/eliminar-producto/:id')

        }


}
