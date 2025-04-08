import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-demo2',
  imports: [],
  standalone: true,
  templateUrl: './http-demo2.component.html',
  styleUrl: './http-demo2.component.css',
})
export class HttpDemo2Component {
  url_path = 'https://jsonplaceholder.typicode.com/posts/1/comments';
  comments: any = [];
  constructor(private http: HttpClient) {
   
  }

  fetchAllComments() {
    this.http.get(this.url_path).subscribe((response: any) => {
      this.comments = response;
      console.log('fetchUserData_angular', response);
    });
  }
}
