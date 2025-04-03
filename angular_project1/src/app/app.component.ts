import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { CategoriesComponent } from './Components/categories/categories.component';
import { CarouselComponent } from "./Components/carousel/carousel.component";
import { BodyComponent } from "./Components/body/body.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { DatabindingComponentsComponent } from './Assignments/databinding-components/databinding-components.component';
import { ReadArraySearchSortPaginationComponent } from './Assignments/read-array-search-sort-pagination/read-array-search-sort-pagination.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    NavbarComponent, 
    CategoriesComponent, 
    CarouselComponent, 
    BodyComponent, 
    FooterComponent,
  DatabindingComponentsComponent,
ReadArraySearchSortPaginationComponent],  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_project1';
}
