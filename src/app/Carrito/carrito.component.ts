import { Component, OnInit } from "@angular/core";
import { Carrito } from "../model/carrito";
import { CarritoProductosService } from "../providers/carritoproductos";

@Component({
  selector: "app-carrito",
  templateUrl: "./carrito.component.html",
  styleUrls: ["./carrito.component.scss"]
})
export class CarritoComponent implements OnInit
 {
  carrito: Carrito[];
  carritocantidad: Carrito;
  //Campo del Filtro
  searchText: string;

  constructor(public carritoService: CarritoProductosService)

          {
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
  //Metodo para restar la cantidad de productos que quieres
  restar() {
             console.log("Click restar");

            //Si la cantidad es igual que 1 no hace nada,si es mayor resta la cantidad 1 vez
            if(this.carritocantidad.cantidad===1)
               {

             }
            else{
                  this.carritocantidad.cantidad--;
                }
    
          }
}
