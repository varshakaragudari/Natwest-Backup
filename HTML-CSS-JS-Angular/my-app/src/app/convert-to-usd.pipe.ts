import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToUSD'
})
export class ConvertToUSDPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [x]=args;
    return value=value*x;
  }

}
