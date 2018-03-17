import { Component, OnInit } from "@angular/core";
import { Carrito } from "../model/carrito";
import { CarritoProductosService } from "../providers/carritoproductos";

@Component({
  selector: "app-carrito",
  templateUrl: "./carrito.component.html",
  styleUrls: ["./carrito.component.scss"]
})
export class CarritoComponent implements OnInit {
  carrito: Carrito[];
  carritocantidad: Carrito;
  //Campo del Filtro
  searchText: string;

  constructor(public carritoService: CarritoProductosService) {
    this.carrito = [];
  }

  ngOnInit() {
    console.log("CarritoComponent ngOnInit");

    this.carrito = this.carritoService.getAll();
  }
  
//Metodo para sumar la cantidad de productos que quieres
  sumar() {
    console.log("Click sumar");
    this.carritocantidad.cantidad++;
  }
}
