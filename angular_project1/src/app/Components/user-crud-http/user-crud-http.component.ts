import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-crud-http',
  imports: [],
  standalone:true,
  templateUrl: './user-crud-http.component.html',
  styleUrl: './user-crud-http.component.css'
})
export class UserCrudHttpComponent {
users:any;
  constructor(private userservice:UserService){

  }
  ngOnInit(){
// this.userservice.getAllUsers();
  }
}
