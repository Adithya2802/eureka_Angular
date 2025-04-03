import { FormsModule } from '@angular/forms';
import { EmployeeService } from './../../services/employee.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employeewithservice',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './employeewithservice.component.html',
  styleUrl: './employeewithservice.component.css',
})
export class EmployeewithserviceComponent {
  employees: any;
  selectedOption: string = '';
  constructor(private employeeService: EmployeeService) {
    this.employees = employeeService.getAllEmployees();
    console.log('this is employeewith', this.employees);
    console.log('the selectedOption from constructor', this.selectedOption);
  }

  ngDoCheck(){
    console.log('the selectedOption from ngDoCheck', this.selectedOption);
    if(this.selectedOption.includes('Female Employees')){
      this.employees = this.employeeService.getFemaleEmployees();
    }else if (this.selectedOption.includes('Male Employees')){
      this.employees = this.employeeService.getMaleEmployees();
    }else
    this.employees = this.employeeService.getAllEmployees();
  }

  selectOption(option: string) {
    this.selectedOption = option;
    if(this.selectedOption.includes('Female Employees')){
      this.employees = this.employeeService.getFemaleEmployees();
      console.log('from if{}',this.employees);
    }else if (this.selectedOption.includes('Male Employees')){
      this.employees = this.employeeService.getMaleEmployees();
      console.log('from else{}',this.employees);
    }else
    this.employees = this.employeeService.getAllEmployees();
    console.log('the selectedOption from selectOption()', this.selectedOption);
  }
}
