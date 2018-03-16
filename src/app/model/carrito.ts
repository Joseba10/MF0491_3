/* Clase para encapsular los atributos de un Receta */
export class Carrito {
  //Atributos
  id: number;
  nombre: string;
  imagen: string;
  precio: number;
  oferta: number;
  descripcion: string;

  //Constructor
  constructor(nombre: string) {
    this.nombre = nombre;
    this.imagen =
      "http://www.colgateprofesional.es/Professional/v1/es/es/locale-assets/img/heros/Products-Slider-Toothpaste.jpg";
    this.precio = 0;
    this.oferta = 0;
    this.descripcion = "";
  }
}
