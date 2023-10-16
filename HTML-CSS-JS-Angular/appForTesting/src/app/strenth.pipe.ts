import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strenth'
})
export class StrenthPipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {
     if(value<10)
     return "weak";
  }

}
