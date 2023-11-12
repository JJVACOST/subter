export class usuarios{
    _id?: string
    nombre: string
    telefono: number
    correo: string
    password: string
    rol: string

    constructor(nombre: string, telefono: number, correo: string, password: string, rol: string){
        this.nombre = nombre
        this.telefono = telefono
        this.correo = correo
        this.password = password
        this.rol = rol
    }

}


