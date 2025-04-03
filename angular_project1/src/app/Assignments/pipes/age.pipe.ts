import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone:true
})
export class AgePipe implements PipeTransform {

  transform(input:string ): number {
    const userYear = new Date(input).getFullYear();
    const currYear = new Date().getFullYear();
    let userAge = currYear-userYear; 
    console.log(typeof currYear);
    return userAge;
  }

}
