import { Component } from '@angular/core';
import { EmployeeaddComponent } from '../employeeadd/employeeadd.component';
import { EmployeetableComponent } from '../employeetable/employeetable.component';
import employeeData from '../employee-crud/employee.json'
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employee',
  imports: [EmployeeaddComponent,
    EmployeetableComponent,FormsModule, CommonModule
  ],
  standalone: true,
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employeeArr = employeeData;
  rowNum: number=0;
selectedEmp:any=null;
userName:string = '';
firstName:string='';
lastName:string='';
id: number;
nextId: number = 4;
showAddModal: boolean = true;

numArr = [10, 20, 30, 40]
  constructor(){
    this.employeeArr = employeeData;
    this.id = this.employeeArr.length;
   
  }

  // ngOnInit() {
  //   console.log('Parent ngOnInit');
  // }
  // ngOnChanges() {
  //   console.log('Parent ngOnChanges');
  // }
  // ngDoCheck() {
  //   console.log('Parent ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked')
  // }
  // ngAfterViewInit() {
  //   console.log('Parent ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }
 


  delete(id:number){
    console.log('Im in Delete Method');
    Swal.fire({
      title: "Do you want to Delete the employee?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.employeeArr = this.employeeArr.filter(emp=>emp.id!==id);
        Swal.fire("Deleted!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Not Deleted", "", "info");
      }
    });
  }
  
  addEmployee(employee:any){
  this.selectedEmp=employee;
  this.showAddModal = true;
  }
  
  submit(){
    this.employeeArr.push({
      id: this.nextId++,
      firstName: this.firstName,
      lastName:  this.lastName
      
    })
    this.openSnackbar();
  this.showAddModal=false;
  }
  openSnackbar(){
    new Snackbar('Employee Added Successfully',
      { position: 'top-center', theme: 'Dark', timeout: 5000, actionText: 'X' }
    );
  }

  receiveDataFromChild(employee: any){
    console.log('in receiveDataFromChild ', employee);
    this.employeeArr.push({
      id: this.nextId++,
      firstName: employee.firstName,
      lastName:  employee.lastName
      
    })
    console.log(this.employeeArr);
  }

}
