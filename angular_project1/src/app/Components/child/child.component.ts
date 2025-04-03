import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, SimpleChange, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  standalone:true,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  inputs:['inputToChild','numValue'],
  //changeDetection:ChangeDetectionStrategy

})
export class ChildComponent implements OnChanges {
  inputToChild: any;
  numArr: any;
  numValue:any;

  constructor(private http:HttpClient){
  this.numArr=[30, 20, 40, 30];
  
  }
  ngOnInit(){
    console.log('Child ngOnit')
     this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (res)=> console.log(res));
  }

  ngOnChanges(changes:SimpleChanges){
    console.log('Child ngOnchanges method')
    this.numArr.push(this.numValue);
  
  }
  ngDoCheck(){
    console.log('Child ngDoCheck')
  }

}
