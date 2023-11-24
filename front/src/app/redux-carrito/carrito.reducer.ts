import { createReducer, on } from "@ngrx/store"
import { addCarrito, delCarrito } from "./actions.carrito"


export const initState:any[] = []


export const carritoReducer = createReducer(
  initState,
    on(addCarrito, (state:any, product:any ) => {
        console.log(state)
        return [...state, product['0']]
    })
);

function add(state:any, product:any){
    console.log(state)
    return
}
