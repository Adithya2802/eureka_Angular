import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';

@Component({
  selector: 'app-employeeadd',
  imports: [FormsModule],
  standalone:true,
  templateUrl: './employeeadd.component.html',
  styleUrl: './employeeadd.component.css',
outputs:['nameEvent']

})
export class EmployeeaddComponent {


  firstName= '' ;
lastName:string='';
employee ={
  id : 0,
  firstName : '',
  lastName : ''
};

nameEvent = new EventEmitter();
submit(){
 console.log('in submit')
 this.employee.firstName = this.firstName;
 this.employee.lastName = this.lastName;
 this.sendDataToParent();
 console.log(this.employee.firstName);
  this.openSnackbar();

}


sendDataToParent(){
  this.nameEvent.emit(this.employee);
}

openSnackbar(){
  new Snackbar('Employee Added Successfully',
    { position: 'top-center', theme: 'Dark', timeout: 5000, actionText: 'X' }
  );
}




}
