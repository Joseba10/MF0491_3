import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

//Componentes
import { AppComponent } from "./app.component";
import { CarritoComponent } from "./carrito/carrito.component";
import { ListadoComponent } from "./carrito/listado/listado.component";

//Servicios
import { CarritoProductosService } from "./providers/carritoproductos";

//Para que funcione ngModel

//Pipes/Filtros
import { NombreFilter } from "./pipes/nombrefilter";

@NgModule({
  declarations: [
    AppComponent,
    CarritoComponent,
    ListadoComponent,
    NombreFilter
  ],
  imports: [BrowserModule, FormsModule],
  providers: [CarritoProductosService],
  bootstrap: [AppComponent]
})
export class AppModule {}
