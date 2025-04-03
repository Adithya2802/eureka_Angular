import { HttpClientModule } from '@angular/common/http';
import { Component, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-employeetable',
  imports: [HttpClientModule],
  standalone:true,
  templateUrl: './employeetable.component.html',
  styleUrl: './employeetable.component.css',
  inputs : ['employeesDataFromParent'],
  outputs:['deleteEvent'],
  // changeDetection: ChangeDetectionStrategy.OnPush()
})
export class EmployeetableComponent {
  deleteEvent = new EventEmitter();
  @ViewChild('inputBox1')
  inputBoxRef!: ElementRef;
  employeesDataFromParent: any;

  constructor(private cdr: ChangeDetectorRef){
   console.log('Child constructor')
   console.log(this.inputBoxRef)
  }

  callParentFromHTML(id:number) {
    this.deleteEvent.emit(id); 
  }

  sayHi(){
    console.log('hiiiii');
  }

  ngOnInit() {
    console.log('Child ngOnInit');
    // this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
  ngOnChanges() {
    console.log('Child ngOnChanges');
  }
  ngDoCheck() {
    this.cdr.markForCheck();
    console.log('Child ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('Child ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('Child ngAfterContentChecked')
  }
  ngAfterViewInit() {
    console.log('Child ngAfterViewInit');
    console.log(this.inputBoxRef);
    this.inputBoxRef.nativeElement.focus();
    this.inputBoxRef.nativeElement.style.background='red';
  }
  ngAfterViewChecked() {
    console.log('Child ngAfterViewChecked');
  }
  // ngOnDestroy() {
  //   console.log('Child ngOnDestory');
  // }
 
}
// when click on delete button - event should trigger
// that should call the method in the parent. 