import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation',
  standalone:true,
  pure:true
})
export class SalutationPipe implements PipeTransform {

  transform(value: string, empObj: any): unknown {
    console.log('emp object :', empObj);
    if(value==='male'){
      empObj.firstName = 'Mr. '+empObj.firstName;
    }else{
      empObj.firstName = 'Mrs. '+empObj.firstName;
    }
    value==='male'? empObj.firstName = 'Mr. '+empObj.firstName : empObj.firstName = 'Mrs. '+empObj.firstName;

    return value;
  }

}
