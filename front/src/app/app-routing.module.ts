import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {guardiaGuard} from '../app/guards/guardia.guard';

import { InicioComponent } from './components/inicio/inicio.component';
import { BlogComponent } from './components/blog/blog.component';
import { ShopComponent } from './components/shop/shop.component';
import { RegisterComponent } from './components/register/register.component';
import { CrearproductosComponent } from './components/crearproductos/crearproductos.component';
import { LoginComponent } from './components/login/login.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { Error404Component } from './components/error404/error404.component';
import { UploadfilesComponent } from './components/uploadfiles/uploadfiles.component';
import { CarritoComponent } from './components/carrito/carrito.component';


const routes: Routes = [
    {path:'',component:InicioComponent},
    {path:'inicio',component:InicioComponent},
    {path:'blog', component:BlogComponent},
    {path:'shop', component:ShopComponent},
    {path:'login', component:LoginComponent},
    {path:'registro', component:RegisterComponent},
    {path:'crea_prod', canMatch:[guardiaGuard], component:CrearproductosComponent},
    {path:'detalle-producto/:id', component:DetalleProductoComponent},
    {path:'carrito', component:CarritoComponent},
    {path: '404', component:Error404Component},
    {path: 'subir', component:UploadfilesComponent},
    {path: '**', redirectTo: '404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
