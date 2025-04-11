import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  imports: [],
  standalone: true,
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css',
})
export class ProductdetailsComponent {
  product: any;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((response) => {
      console.log(response);
      this.product = response;
    });
  }
}
