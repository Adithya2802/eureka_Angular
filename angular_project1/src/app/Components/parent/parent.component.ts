import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  standalone:true,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  valuefromParent:string;
  numArr: any;
  value:number;

  constructor(){
    this.valuefromParent = 'value 100 from parent';
    this.numArr = [10, 20, 30, 50, 1];
    this.value=80;

}

addValue(): number{
  return this.value++;
}
}