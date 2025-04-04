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
  }

  selectOption(option: string) {
    this.employeeService.getEmployees(option);
  }
}
