import { createAction, props } from '@ngrx/store';
import { carrito } from './carrito.model'


export const addCarrito = createAction("Agregar Item al carrito", props<{ carrito: carrito }>());
export const delCarrito = createAction("Eliminar Item del carrito", props<{ carrito: carrito }>());
