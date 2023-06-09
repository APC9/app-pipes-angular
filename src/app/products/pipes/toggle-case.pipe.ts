import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string, ...args: any): string {
    if( args[0] === false )
      return value.toLowerCase();

    return value.toUpperCase();
  }

}
