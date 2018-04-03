import { Component, OnInit } from "@angular/core";

import { Producto } from "../model/producto";
import { ProductosService } from "../providers/productos";

@Component({
  selector: "app-supermercado",
  templateUrl: "./supermercado.component.html",
  styleUrls: ["./supermercado.component.scss"]
})
export class SupermercadoComponent implements OnInit {
  productos: Producto[];
  productoscantidad: Producto;
  carrito: Producto[];
  totalProducto: number;
  subtotal: number;
  descuentos: number;
  total: number;
  //Campo del Filtro
  searchText: string;
  show: boolean;

  //inyectamos para poder usar este servicio en el supermercado
  constructor(public productoService: ProductosService) {
    this.productos = [];
    this.productoscantidad = new Producto("");
    this.carrito = [];
    this.totalProducto = 0;
    this.total = 0;
    this.subtotal = 0;
    this.descuentos = 0;
  }

  ngOnInit() {
    console.log("SupermercadoComponent ngOnInit");

    this.productos = this.productoService.getAll();
  }

  //Metodo para sumar la cantidad de productos que quieres
  sumar(producto) {
    producto.cantidad++;
    console.log("Click sumar", this.productoscantidad.cantidad);
  }
  //Metodo para restar la cantidad de productos que quieres
  restar(producto) {
    //Si la cantidad es igual que 1 no hace nada,si es mayor resta la cantidad 1 vez
    if (producto.cantidad <= 1) {
    } else {
      producto.cantidad--;
      this.totalCarrito();
      console.log("Click restar", this.productoscantidad.cantidad);
    }
  }

  cambioCarrito(event) {
    console.log(
                "ProductoComponent cambioCarrito operacion: %i producto: %o",
                 event.operacion,
                 event.producto
                );

    let op = event.operacion;
    let p = event.producto;

    switch (op)
     {
      case 1: {
                 console.log("ProductoComponent cambioCarrito menos cantidad");
                 this.carrito.forEach(el => {
                                              if (el.id === p.id) {
                                                   el.cantidad--;
                                                   return false;
                                                }
                                            });
               break;
              }

      case 2: {
                  console.log("ProductoComponent cambioCarrito mas candidad");
                  this.carrito.forEach(el => {
                                                if (el.id === p.id) {
                                                el.cantidad++;
                                                return false;
                                                }
                                              });
              break;
              }

      case 3: {
                  console.log("ProductoComponent cambioCarrito eliminar");
                  this.carrito = this.carrito.filter(el => {
                                                            return el.id !== p.id;
                                                            });
              break;
              }

      default: {
        console.warn("ProductoComponent cambioCarrito operacion no soportada");
        break;
      }
    }
    this.totalCarrito();
  }
  totalCarrito() {
    console.log("    reclacular totales");
    let _total = 0;
    let _descuentos = 0;
    let _subtotal = 0;
    let _totalProducto = 0;
   
    for (let producto of this.carrito) {
          _totalProducto += producto.cantidad;
      if (producto.oferta > 0) {
        _descuentos +=
          producto.precio * producto.oferta / 100 * producto.cantidad;
        _total +=
          (producto.precio - producto.precio * producto.oferta / 100) *
          producto.cantidad;
      } else {
        _total += producto.precio * producto.cantidad;
      }
      _subtotal += producto.precio * producto.cantidad;
    }
    this.total = _total;
    this.subtotal = _subtotal;
    this.descuentos = _descuentos;
    this.totalProducto = _totalProducto;
  }

  mostrar() {
    console.log("mostrando contenido");
    this.show = !this.show;
  }

  agregarCarrito(producto) {
    this.carrito = producto;
    console.log("agregarCarrito", this.carrito);
  }
}
