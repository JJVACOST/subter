import { createAction, props } from '@ngrx/store';
import { carrito } from './carrito.model'


export const addCarrito = createAction("Agregar Item al carrito", props<{ product: carrito }>());
export const delCarrito = createAction("Eliminar Item del carrito", props<{ product: carrito }>());
