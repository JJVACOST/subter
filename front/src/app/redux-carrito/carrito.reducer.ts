import { createReducer, on } from "@ngrx/store"
import { addCarrito, delCarrito } from "./actions.carrito"


export const initState:any[] = []



export const carritoReducer = createReducer(
  initState,
    on(addCarrito, (state:any, product:any ) => {

        // crear un temporral ue se pueda modificar
        let tmpProduct = {...product['0']}

        tmpProduct.cantidad = !tmpProduct.cantidad ? 1 : tmpProduct.cantidad
        // validar si el producto en el carrito existe
        let search =  state.findIndex((e: any) => e._id === tmpProduct._id)

        if(search >= 0){
            // hacer una copia de un array para que sea mutable
            let tmp = state.map((p: any) => ({...p}))

            // incrementar la cantidad
            tmp[search].cantidad += 1

            // se devuelve el temporal
            console.log({tmp})
            return tmp
        }

        // agregarlo nuevo al carito
        return [...state, tmpProduct]
    })
);

function add(state:any, product:any){
    console.log(state)
    return
}
