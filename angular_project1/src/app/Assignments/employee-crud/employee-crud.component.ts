
import { Component } from '@angular/core';
import  employeeData from './employee.json';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import Snackbar from 'awesome-snackbar';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-employee-crud',
  standalone: true,
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css',
  imports: [FormsModule, CommonModule]
})
export class EmployeeCRUDComponent {
employees = employeeData;
rowNum: number=0;
selectedEmp:any=null;
userName:string = '';
firstName:string='';
lastName:string='';
id: number = this.employees.length;
nextId: number = 4;
showAddModal: boolean = true;

delete(id:number){
  Swal.fire({
    title: "Do you want to Delete the employee?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Delete",
    denyButtonText: `Don't Delete`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      this.employees = this.employees.filter(emp=>emp.id!==id);
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
  this.employees.push({
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

}
