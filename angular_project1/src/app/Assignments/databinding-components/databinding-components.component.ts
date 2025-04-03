import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding-components',
  standalone: true,
  templateUrl: './databinding-components.component.html',
  styleUrl: './databinding-components.component.css',
  imports: [CommonModule,
     FormsModule]
})
export class DatabindingComponentsComponent {
  randomContent : String = 'Customer Perspective: Delivering seamless, secure, and personalized experiences go toward achieving customer satisfaction, retention, and loyalty. • Internal Processes: Efficient operations, statutory compliance, and strong cybersecurity measures. '
 isVisible: boolean = false;
 maxLength: number = 100;
 msg:String = '';
 selectedState: String = '';
 num1: number = 0;
 num2: number = 0;
 result: number = 0;
 selectedOperation: String = '';
flag: boolean = true;
increment: String ='1';
decrement: String ='2';
reset: String ='3';
value1: number = 0;



 toggleVisibility(){
this.isVisible = !this.isVisible;
 }
  myFunction(){
    alert();
  }

  mathOperation(){
    switch(this.selectedOperation){
      case '+' : this.result = this.num1 + this.num2; break;
      case '-' : this.result = this.num1 - this.num2;break;
      case '*' : this.result = this.num1 * this.num2;break;
      case '/' : this.result = this.num1 / this.num2;break;
    }    
  }
}
 
