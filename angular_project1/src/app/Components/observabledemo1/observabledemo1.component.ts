import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { from, interval, Observable } from 'rxjs';

@Component({
  selector: 'app-observabledemo1',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './observabledemo1.component.html',
  styleUrl: './observabledemo1.component.css',
})
export class Observabledemo1Component {

  nums!:Observable<any>;
  ngOnInit() {
    this.createObservableDemo1();
    this.demo2();
  }

  demo3(){
    
  }
  demo2(){
    let cars = ['tata','toyoto','hundai'];
    let carsObservable = from(cars);
    carsObservable.subscribe({
      next:(response)=>{console.log(response)}
    })
    this.nums = interval(1000);
    this.nums.subscribe(val=>console.log(val))
  }

  createObservableDemo1() {
    let publisher1 = new Observable((observer) => {
      observer.next('AAAA');
      observer.next('BBBB');
      observer.next('CCCC');
      observer.next('DDDD');
      observer.complete();
    });
    publisher1.subscribe({
      next : (response)=>{console.log('Next method called......',response)},
      error: (err)=>{console.log(err)},
      complete:()=>{console.log('complete is called.....All data received')}
    })
  }

}


