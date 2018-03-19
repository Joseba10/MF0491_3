import { Pipe , PipeTransform} from "@angular/core";

//Filtro para redondear un numero con decimales

@Pipe({name: 'redondear'})
export class RoundPipe implements PipeTransform
 {
    transform (input:number) 
    {
        return input.toFixed(2);
     }
}