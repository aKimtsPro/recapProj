import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vide'
})
export class VidePipe implements PipeTransform {

  transform(value: String): String {
    return value === null || value === '' ? 'vide' : value;
  }

}
