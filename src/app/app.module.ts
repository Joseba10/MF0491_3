import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//Componentes
import { AppComponent } from "./app.component";
import { SupermercadoComponent } from "./Supermercado/supermercado.component";
import { CarritoComponent } from "./Supermercado/Carrito/carrito.component";

//Servicios
import { ProductosService } from "./providers/productos";

//Para que funcione ngModel
import { FormsModule } from "@angular/forms";

//Pipes/Filtros
import { NombreFilter } from "./pipes/nombrefilter";
import { RoundPipe } from "./pipes/redondear";



@NgModule(
  {
     declarations: [
                    AppComponent,
                    SupermercadoComponent,
                    CarritoComponent,
                    NombreFilter,
                    RoundPipe
                  ],

      imports: [BrowserModule, FormsModule],
      providers: [ProductosService],
      bootstrap: [AppComponent]
})
export class AppModule {}
