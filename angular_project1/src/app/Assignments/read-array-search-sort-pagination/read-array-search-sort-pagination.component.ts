import { Component } from '@angular/core';
import productsArr from './products';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-read-array-search-sort-pagination',
  standalone: true,
  templateUrl: './read-array-search-sort-pagination.component.html',
  styleUrl: './read-array-search-sort-pagination.component.css',
  imports:[
    NgxPaginationModule,
    FormsModule,
    RouterLink
  ]
})


export class ReadArraySearchSortPaginationComponent {
 
  products = productsArr;
  filteredProducts = this.products;
p: any;
searchString: string = '';
sortOption = '';
currentPage = 1;
  itemsPerPage = 5;



search(){
this.filteredProducts = this.products.filter(product=>{
  return product.title.includes(this.searchString);
  console.log(this.filteredProducts);
})
}

sort(sortOption:string){
if('asc'===sortOption){
this.filteredProducts.sort((p1,p2)=>p1.price-p2.price)
}else{
this.filteredProducts.sort((p1,p2)=>p2.price-p1.price)
}
}



//Should see what all product titles are matching with the given string

// applyFilters(){
// let result = [...this.products];
// console.log(this.searchString);
// result = result.filter(p=>
// p.title.includes(this.searchString));
// if(this.sortOption==='asc'){
// result.sort((a,b)=>a.price-b.price)
// }else{
// result.sort((a,b)=>b.price-a.price);
// }
// this.filteredProducts = result;
// this.setPage(1);
// }




}
