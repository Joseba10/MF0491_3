import { Injectable } from "@angular/core";

import { MOCKS_Productos } from "./mocks.productos";
import { Producto } from "../model/producto";

export class ProductosService {
  productos: Producto[];

  constructor() {
    console.log("ProductosService constructor");
  }

  getAll(): Producto[] 
 
  {
    console.log("RecetasService getAll");
    let jsonData = JSON.parse(MOCKS_Productos.stockproductos); //Parsear los datos de los productos
    this.productos = [];
    let producto;

    //Recogemos los datos del JSON

    jsonData.forEach(el => 
      {
        producto = new Producto(el.nombre);
        producto.imagen = el.imagen;
        producto.precio = el.precio;
        producto.oferta = el.oferta;
        producto.descripcion = el.descripcion;
        producto.cantidad = el.cantidad;
        producto.descuento= el.descuento;
        this.productos.push(producto);
      });

    return this.productos;
  }
}
