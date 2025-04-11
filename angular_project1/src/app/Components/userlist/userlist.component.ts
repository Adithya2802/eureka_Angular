import { Component } from '@angular/core';
import userData from './users';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-userlist',
  imports: [RouterLink],
  standalone:true,
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {
  users = userData;
}
