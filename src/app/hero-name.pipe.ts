import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroName'
})
export class HeroNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.firstName + " " + value.lastName + " " + value.gender;
  }

}
