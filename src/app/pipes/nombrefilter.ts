import { Pipe, PipeTransform } from "@angular/core";
import { Producto } from "../model/producto";

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
   
  transform(stock: Producto[], searchText: string): Producto[] 
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
