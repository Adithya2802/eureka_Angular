import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  //employees:any;
  tempEmployeeArr = [
    {
      id: 0,
      firstName: '',
      lastName: '',
      gender: '',
    }
  ];


  employees = [
    {
      id: 1,
      firstName: 'Tom',
      lastName: 'Cruise',
      gender: 'male',
    },
    {
      id: 2,
      firstName: 'Maria',
      lastName: 'Sharapova',
      gender: 'female',
    },
    {
      id: 3,
      firstName: 'James',
      lastName: 'Bond',
      gender: 'female',
    },
    {
      id: 4,
      firstName: 'Jammy',
      lastName: 'Bondy',
      gender: 'male',
    },
  ];
  
  constructor() {}
  getAllEmployees() {
    this.tempEmployeeArr = this.employees;
    return this.tempEmployeeArr;
  }
  getMaleEmployees() {
   this.tempEmployeeArr = this.employees.filter((emp) =>emp.gender.toLowerCase() ==='male' );
    console.log(this.tempEmployeeArr);
    return this.tempEmployeeArr;
  }
  getFemaleEmployees() {
    this.tempEmployeeArr = this.employees.filter((emp) => emp.gender.toLowerCase() === 'female');
    console.log(this.employees);
    return this.tempEmployeeArr;
  }
}
