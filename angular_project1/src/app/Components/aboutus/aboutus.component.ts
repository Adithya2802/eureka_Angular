import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  imports: [RouterLink],
  standalone:true,
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {

  constructor(private router: Router){
 this.doSomethingAndGotoHome();
  }
  doSomethingAndGotoHome(){
    console.log('do something')
    //this.router.navigate(['/home']);
  }

}
