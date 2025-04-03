

import { Component, inject } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-demo2',
  imports: [],
  standalone:true,
  templateUrl: './demo2.component.html',
  styleUrl: './demo2.component.css'
})
export class Demo2Component {
  calculatorService : CalculatorService = inject(CalculatorService);

constructor(){
  console.log('demo-2 constructor addition of a, b',this.calculatorService.add(4,6));
}

  ngOnInit(){
    console.log(this.calculatorService.add(3,5));
    console.log('Demo2 onInit');
    
  }
  ngOnDestroy(){
    console.log('Demo2 onDestroy')
  }

}
