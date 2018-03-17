import { Pipe, PipeTransform } from "@angular/core";
import { Carrito } from "../model/carrito";

@Pipe({
  name: "filter"
})
export class NombreFilter implements PipeTransform {
  /**
   * Filtro para buscar en una coleccion de Productos. No es CaseSensitive.
   * @param stock : Productos[]
   * @param searchText 
   */

   //Filtro para buscar por el nombre del Producto
   
  transform(stock: Carrito[], searchText: string): Carrito[] 
  {
    if (!stock) return [];
    if (!searchText) return stock;
    searchText = searchText.toLowerCase();
    let buscarnombre = "";
    return stock.filter(it => {
      buscarnombre = it.nombre;
      buscarnombre = buscarnombre.toLowerCase();
      return buscarnombre.includes(searchText);
    });
  }
}
