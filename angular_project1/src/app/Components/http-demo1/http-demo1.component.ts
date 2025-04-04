import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  imports: [],
  standalone: true,
  templateUrl: './http-demo1.component.html',
  styleUrl: './http-demo1.component.css',
})
export class HttpDemo1Component {
  users:any;
  isLoad :boolean;
  constructor(private http: HttpClient) {
this.isLoad=true;
  }
  ngOnInit(){
    this.fetchUserData_angular();
    this.fetchUserData_JavaScript_then();
    this.fetchUserData_JavaScript_async_await();
  }
  fetchUserData_angular(){
    const api_url = ' https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies';
    this.http.get(api_url).subscribe((response:any)=>{
      this.isLoad=false;
      console.log('fetchUserData_angular',response)
    });
  }
  //RxJs
  fetchUserData_JavaScript_then(){
    const api_url = ' https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies';
    //fetch(api_url); //fetch() to get the data from th url, a javasccript method which returns promise
    fetch(api_url).then(
      (response)=>{
        //console.log(response)
        response.json().then(finalData=>{
          console.log('fetchUserData_JavaScript_then',finalData);
        }) 
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  async fetchUserData_JavaScript_async_await(){
    const api_url = ' https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies';
    let response =await fetch(api_url);
    let finalData = await response.json();
    console.log('fetchUserData_JavaScript_async_await',finalData)

  }
}

