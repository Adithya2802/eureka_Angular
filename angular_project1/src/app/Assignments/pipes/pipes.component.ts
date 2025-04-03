import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { OrdinalPipe } from './ordinal.pipe';
import { RomanPipe } from './roman.pipe';
import { AgePipe } from './age.pipe';
import employeesData from './employee.json';
import { SalutationPipe } from './salutation.pipe';

@Component({
  selector: 'app-pipes',
  imports: [FormsModule, OrdinalPipe, RomanPipe, AgePipe,SalutationPipe],
  standalone: true,
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  inputNum:string = '';
  natNum:string = '';
  inputDate: string = '';
  employeesArr = employeesData;
  searchString:string='';
 

  search(){
  this.employeesArr = this.employeesArr.filter(e=>e.firstName.includes(this.searchString));
  }

}
