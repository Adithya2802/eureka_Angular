import { Component } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.css',
  standalone:true
})
export class LifeCycleHooksComponent {

  constructor(){
    console.log('Constructor')
  }

  ngOnChanges(){
console.log('ngOnChanges.......')
  }

  ngOnInit() {
    console.log('ngOnInit')
  }

 

  ngDoCheck(){
    console.log('ngDoCheck')
  }
  ngAfterContentInit(){

  }

  ngAfterContentChecked(){

  }

}
