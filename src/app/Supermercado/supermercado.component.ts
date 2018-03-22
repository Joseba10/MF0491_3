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
  carrito:Producto[];
  //Campo del Filtro
  searchText: string;
  show: boolean;

  constructor(public productoService: ProductosService)

          {
            this.productos = [];
            this.productoscantidad= new Producto("");
            this.carrito= [];
          }

  ngOnInit() {
              console.log("SupermercadoComponent ngOnInit");
          
              this.productos = this.productoService.getAll();
              }
  
  //Metodo para sumar la cantidad de productos que quieres
  sumar(producto) {
                 
                   
                producto.cantidad++;
                    console.log("Click sumar",this.productoscantidad.cantidad);
          }
  //Metodo para restar la cantidad de productos que quieres
  restar(producto) {
     
             //Si la cantidad es igual que 1 no hace nada,si es mayor resta la cantidad 1 vez
            if( producto.cantidad<=1)
               {

             }
            else{
     
              producto.cantidad--;
                  console.log("Click restar",this.productoscantidad.cantidad);
                }
    
          }

  mostrar(){

    console.log("mostrando contenido");
    this.show = !this.show;
  }    

  agregarCarrito(producto){

    this.carrito=producto;
    console.log("agregarCarrito",this.carrito);
  }
}
