

import { CalculatorService } from '../../services/calculator.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-demo1',
  imports: [],
  standalone:true,
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css'
})
export class Demo1Component {

  myTimer:any;
  timeNow:any;
//private calculatorService : CalculatorService
  constructor(private calculatorService:CalculatorService){ //Dependency injection
  //  this.myTimer= setInterval(()=>{
  //     console.log('Im running from Demo1');
  //     this.timeNow = new Date().toLocaleTimeString();
  //   },1000);
console.log('in constructor of demo1');
console.log('addition of a, b',this.calculatorService.add(4,5));
  }

  ngOnInit(){
    console.log('Demo1 onInit')
  }
  ngOnDestroy(){
    console.log('Demo1 onDestroy');
    clearInterval(this.myTimer);
  }

}
