import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titrifier'
})
export class TitrifierPipe implements PipeTransform {

  transform(value: String, titre?: String): String {
    if(titre === undefined)
      titre = "Titre par défaut"
    return titre +' '+ value;
  }

}
