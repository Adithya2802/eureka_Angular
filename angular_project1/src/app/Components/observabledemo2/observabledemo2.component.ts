import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { concatMap, forkJoin, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-observabledemo2',
  imports: [],
  standalone:true,
  templateUrl: './observabledemo2.component.html',
  styleUrl: './observabledemo2.component.css'
})
export class Observabledemo2Component {


  constructor(private http: HttpClient) { 
  
  }

  


forkJoinDemo() {
let userIds = [1,2,3];
let requests = userIds.map(userId => {
  return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
});
forkJoin(requests).subscribe((responses) => {
  //console.log(responses);
});
// forkJoin(requests).subscribe({
//   next: request=>
// });
}

mergeMapDemo(){
   //with mergeMap()
   let productPublisher = of(1, 2, 3, 4, 5);
  // userPublisher.subscribe(val=>console.log(val));
   //with mergeMap()
   productPublisher.pipe(mergeMap(prodId => {
    if(prodId==3){
      return this.http.get(`https://fakestoreapi.com/carts/${prodId}`)
    }else{
      return this.http.get(`https://fakestoreapi.com/carts/${prodId}`)
    }
     
   })).subscribe(cartResponse => {
     console.log(cartResponse)
   });
}

concatMapDemo(){
  //with mergeMap()
  let productPublisher = of(1, 2, 3, 4, 5);
 // userPublisher.subscribe(val=>console.log(val));
  //with mergeMap()
  productPublisher.pipe(concatMap(prodId => {
   if(prodId==3){
     return this.http.get(`https://fakestoreapi.com/carts/${prodId}`)
   }else{
     return this.http.get(`https://fakestoreapi.com/carts/${prodId}`)
   }
    
  })).subscribe(cartResponse => {
    console.log(cartResponse)
  });
}

switchMapDemo(){
  //with mergeMap()
  let productPublisher = of(1, 2, 3, 4, 5);
 // userPublisher.subscribe(val=>console.log(val));
  //with mergeMap()
  productPublisher.pipe(concatMap(prodId => {
   if(prodId==3){
     return this.http.get(`https://fakestoreapi.com/carts/${prodId}`)
   }else{
     return this.http.get(`https://fakestoreapi.com/carts/${prodId}`)
   }
    
  })).subscribe(cartResponse => {
    console.log(cartResponse)
  });
}



ngOnInit() {
  // this.forkJoinDemo();
 // this.mergeMapDemo();
  // this.concatMapDemo();
  this.switchMapDemo
}

}

