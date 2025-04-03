import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roman',
  standalone: true,
})
export class RomanPipe implements PipeTransform {
  transform(input: string): string {
    switch (input) {
      case '1':
        input = 'I';
        break;
      case '2':
        input = 'II';
        break;
      case '3':
        input = 'III';
        break;
      case '4':
        input = 'IV';
        break;
      case '5':
        input = 'V';
        break;
      case '6':
        input = 'VI';
        break;
      case '7':
        input = 'VII';
        break;
      case '8':
        input = 'VIII';
        break;
      case '9':
        input = 'IX';
        break;
      case '10':
        input = 'X';
        break;
    }
    return input;
  }
}
