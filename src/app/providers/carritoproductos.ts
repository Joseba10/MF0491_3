import { Injectable } from "@angular/core";
import { Carrito } from "../model/carrito";
import { MOCKS_Productos } from "./mocks.productos";

export class CarritoProductosService {
  productos: Carrito[];

  constructor() {
    console.log("CarritoProductosService constructor");
  }

  getAll(): Carrito[] {
    console.log("RecetasService getAll");
    let jsonData = JSON.parse(MOCKS_Productos.stockproductos); //Parsear los datos de los productos
    this.productos = [];
    let producto;

    //Recogemos los datos del JSON

    jsonData.forEach(el => {
      producto = new Carrito(el.nombre);
      producto.imagen = el.imagen;
      producto.precio = el.precio;
      producto.oferta = el.oferta;

      this.productos.push(producto);
    });

    return this.productos;
  }
}
