import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css',
})
export class UserdetailsComponent {
  user:any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {
    console.log(this.activatedRoute.params);
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params.id);
      this.http
        .get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        .subscribe((response) => {
          this.user = response;
          console.log(response);
        });
    });
  }
}
