import { Pipe, PipeTransform } from '@angular/core';
import { Voiture } from '../model/Voiture';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Voiture[], startingString: string): Voiture[] {
    return value.filter(voit => voit.model.toLowerCase().startsWith(startingString.toLowerCase()));
  }

}
