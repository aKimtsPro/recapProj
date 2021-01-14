import { Pipe, PipeTransform } from '@angular/core';
import { Voiture } from '../model/Voiture';

@Pipe({
  name: 'voiture'
})
export class VoiturePipe implements PipeTransform {

  transform(value: Voiture): String {
    return value.model +" - "+ value.marque +" - "+ value.immatriculation;
  }

}
