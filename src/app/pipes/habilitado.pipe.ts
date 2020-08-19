import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'habilitado'
})
export class HabilitadoPipe implements PipeTransform {

  transform(value: boolean): any {
    return value ? 'si' : 'no';
  }

}