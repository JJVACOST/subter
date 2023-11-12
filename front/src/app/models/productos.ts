export class productos{
    _id?: string
    nombre: string
    descripcion: string
    precio: number
    urlImg: string
    categoria: string
    status: string

    constructor(nombre: string, descripcion: string, precio: number, urlImg: string, categoria: string, status: string){
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
        this.urlImg = urlImg
        this.categoria = categoria
        this.status = status
    }

}


