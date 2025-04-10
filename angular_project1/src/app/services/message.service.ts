import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
private messageSubject = new Subject<any>();
  constructor() { }

  sendMessage(message:string){
this.messageSubject.next({text:message});
  }

  
}
