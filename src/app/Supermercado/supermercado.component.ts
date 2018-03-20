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
  productos: Producto[];
  productoscantidad: Producto;
  //Campo del Filtro
  searchText: string;

  constructor(public productoService: ProductosService)

          {
            this.productos = [];
            this.productoscantidad= new Producto("");
          }

  ngOnInit() {
              console.log("SupermercadoComponent ngOnInit");
          
              this.productos = this.productoService.getAll();
              }
  
  //Metodo para sumar la cantidad de productos que quieres
  sumar(cantidad) {
                 
                    this.productoscantidad.cantidad= cantidad;
                    this.productoscantidad.cantidad++;
                    console.log("Click sumar", cantidad,this.productoscantidad.cantidad);
          }
  //Metodo para restar la cantidad de productos que quieres
  restar(cantidad) {
      
             this.productoscantidad.cantidad= cantidad;
     
            
             //Si la cantidad es igual que 1 no hace nada,si es mayor resta la cantidad 1 vez
            if(this.productoscantidad.cantidad==1)
               {

             }
            else{
                  this.productoscantidad.cantidad= cantidad;
                  this.productoscantidad.cantidad--;
                  console.log("Click restar",cantidad,this.productoscantidad.cantidad);
                }
    
          }
}
