import { Component, OnInit } from '@angular/core';
import { Carrito } from '../model/carrito';
import { CarritoProductosService } from '../providers/carritoproductos';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {


carrito: Carrito[];


  constructor(public carritoService: CarritoProductosService) { 

this.carrito=[];



  }

  ngOnInit() {

    console.log('TodosComponent ngOnInit');

    this.carrito=this.carritoService.getAll();
  }

  mapeo(result: any) {

    let carritos: Carrito;
    result.forEach(el => {
      carritos= new Carrito(  carritos.nombre = el.nombre);
    
      carritos.precio = el.precio;
      carritos.imagen = el.imagen;
      carritos.oferta = el.oferta;
      carritos.descripcion = el.descripcion;
      this.carrito.push(carritos);
    });

}

}
