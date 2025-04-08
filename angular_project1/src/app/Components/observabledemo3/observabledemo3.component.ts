import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { exhaustMap, fromEvent, map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-observabledemo3',
  imports: [ReactiveFormsModule,
    CommonModule
  ],
  standalone:true,
  templateUrl: './observabledemo3.component.html',
  styleUrl: './observabledemo3.component.css'
})
export class Observabledemo3Component {

  searchResult$: Observable<any> | undefined;
  searchForm: any;
  constructor(private http: HttpClient) {
    this.searchForm = new FormGroup({
      searchField: new FormControl()
    });
  }
  ngOnInit() {
    this.searchResult$ = this.searchForm.get("searchField").valueChanges.pipe(
      switchMap((term) =>
        this.http.get<any>(`https://swapi.dev/api/people/?search=${term}`)
      ),
      map((response: any) =>
        response.count > 0 ? response.results : []
    ));
  }

  @ViewChild('loginBtn') loginBtn!:ElementRef;

  ngAfterViewInit(){
  //   fromEvent(this.loginBtn.nativeElement,'click').subscribe(response=>
  //     console.log('button clicked', response)
  //     this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(response=>{
  //       console.log(response)
  // })
  //   )

    // fromEvent(this.loginBtn.nativeElement,'click').pipe(exhaustMap(val)=>{
    //   return this.http.get('https://jsonplaceholder.typicode.com/users')
    // })
  }

}
