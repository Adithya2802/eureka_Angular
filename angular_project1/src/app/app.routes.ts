import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { CareerComponent } from './Components/career/career.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { UserdetailsComponent } from './Components/userdetails/userdetails.component';
import { UserlistComponent } from './Components/userlist/userlist.component';
import { ReadArraySearchSortPaginationComponent } from './Assignments/read-array-search-sort-pagination/read-array-search-sort-pagination.component';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'careers', component: CareerComponent },
   { path: 'users', component: UserlistComponent },
    { path: 'userdetails/:id', component: UserdetailsComponent },
    { path: 'products', component: ReadArraySearchSortPaginationComponent },
    { path: 'productdetails', component: ProductdetailsComponent},
    { path: '', component: HomeComponent },
    { path: '**', component: NotfoundComponent }
];
    