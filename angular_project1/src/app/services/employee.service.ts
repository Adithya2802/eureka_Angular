import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  //employees:any; // when declaring the variable in the class level and trying to initialize in the constructor
  //the employee object is not recognizable in the filter.

  //tempEmployeeArr = [] is not working, it has to be declared like below.
  tempEmployeeArr: {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
  }[];
  employees: {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
  }[];
  constructor() {
    this.tempEmployeeArr = [];
    this.employees = [{id:1,firstName:'Tom',lastName:'Cruise',gender:'male',},
                      {id:2,firstName:'Maria',lastName:'Sharapova',gender:'female',},
                      {id:3,firstName:'James',lastName:'Bond',gender:'female',},
                      {id:4,firstName:'Jammy',lastName:'Bondy',gender:'male',}
                    ];
  }
  getEmployees(selectedOption: string) {
    if (selectedOption === 'male') {
      this.tempEmployeeArr = this.employees.filter(
        (emp) => emp.gender.toLowerCase() === 'male'
      );
    } else if (selectedOption === 'female') {
      this.tempEmployeeArr = this.employees.filter(
        (emp) => emp.gender.toLowerCase() === 'female'
      );
    } else {
      this.tempEmployeeArr = this.employees;
    }
    return this.tempEmployeeArr;
  }
}
