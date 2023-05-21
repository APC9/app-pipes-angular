import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canfly'
})
export class CanflyPipe implements PipeTransform {

  transform(canfly: boolean ): string {
    return canfly ? 'vuela' : 'No vuela';
  }

}
