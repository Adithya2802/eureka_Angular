import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
  standalone: true
})
export class OrdinalPipe implements PipeTransform {

  transform( input:string): any {
    console.log('transform...')
    switch(input){
      case '21': input=input+'st';break;
      case '22': input=input+'nd';break;
      case '23': input=input+'rd';break;
      case '24': input=input+'th';break;
    }
    return input;
  }

}
