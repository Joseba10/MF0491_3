import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


//Componentes
import { AppComponent } from "./app.component";
import { CarritoComponent } from "./carrito/carrito.component";
import { ListadoComponent } from "./carrito/listado/listado.component";

//Servicios
import { CarritoProductosService } from "./providers/carritoproductos";

//Para que funcione ngModel
import { FormsModule } from "@angular/forms";
//Pipes/Filtros
import { NombreFilter } from "./pipes/nombrefilter";
import { RoundPipe } from "./pipes/redondear";

@NgModule({
  declarations: [
    AppComponent,
    CarritoComponent,
    ListadoComponent,
    NombreFilter,
    RoundPipe
  ],
  imports: [BrowserModule, FormsModule],
  providers: [CarritoProductosService],
  bootstrap: [AppComponent]
})
export class AppModule {}
