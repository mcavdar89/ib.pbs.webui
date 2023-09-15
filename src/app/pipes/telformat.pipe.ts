import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telformat'
})
export class TelformatPipe implements PipeTransform {

  transform(value?: string): unknown {
    if (!value)
      return value;
    let newValue = value.charAt(0) == '0' ? value : "0" + value;

    newValue = "(" + newValue.slice(0, 4) + ") " + newValue.slice(4, 7) + " " + newValue.slice(7, 9) + " " + newValue.slice(9, 11);

    return newValue;
  }

}
