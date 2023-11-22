import { createReducer, on } from "@ngrx/store"
import { addCarrito, delCarrito } from "./actions.carrito"



export const initState = [
 {
    name: "Primer Item",
    state: "Pendiente"
 }
]


export const carritoReducer = createReducer(
  initState,

on(addCarrito, (state, { carrito }) => {
    return { ...state, carrito };
  })
);

