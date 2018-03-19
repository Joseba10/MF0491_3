import { Component, OnInit } from "@angular/core";

import { Producto } from "../model/producto";
import { ProductosService } from "../providers/productos";

@Component({
  selector: "app-supermercado",
  templateUrl: "./supermercado.component.html",
  styleUrls: ["./supermercado.component.scss"]
})
export class SupermercadoComponent implements OnInit
 {
  producto: Producto[];
  productoscantidad: Producto;
  //Campo del Filtro
  searchText: string;

  constructor(public productoService: ProductosService)

          {
            this.producto = [];
          }

  ngOnInit() {
              console.log("SupermercadoComponent ngOnInit");
              this.producto = this.productoService.getAll();
              }
  
  //Metodo para sumar la cantidad de productos que quieres
  sumar() {
            console.log("Click sumar");
            this.productoscantidad.cantidad++;
          }
  //Metodo para restar la cantidad de productos que quieres
  restar() {
             console.log("Click restar");

            //Si la cantidad es igual que 1 no hace nada,si es mayor resta la cantidad 1 vez
            if(this.productoscantidad.cantidad===1)
               {

             }
            else{
                  this.productoscantidad.cantidad--;
                }
    
          }
}
