import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  // getAllUsers():Observable<IUser[]>{
  //   this.http.get<IUser>('http://localhost:3000/users').subscribe(response:IUser=>
  //     return response;
  //   )
  // }
}
