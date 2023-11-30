import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BlogComponent } from './components/blog/blog.component';
import { ShopComponent } from './components/shop/shop.component';
import { CrearproductosComponent } from './components/crearproductos/crearproductos.component'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from "@angular/common/http";
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { Error404Component } from './components/error404/error404.component';
import { UploadfilesComponent } from './components/uploadfiles/uploadfiles.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { StoreModule } from '@ngrx/store';
import { carritoReducer } from './redux-carrito/carrito.reducer';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    InicioComponent,
    LoginComponent,
    RegisterComponent,
    BlogComponent,
    ShopComponent,
    CrearproductosComponent,
    DetalleProductoComponent,
    Error404Component,
    UploadfilesComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({sc: carritoReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
