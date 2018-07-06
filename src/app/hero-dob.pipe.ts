import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroDob'
})
export class HeroDobPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
