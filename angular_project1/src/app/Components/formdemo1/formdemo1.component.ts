import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formdemo1',
  imports: [FormsModule],
  standalone:true,
  templateUrl: './formdemo1.component.html',
  styleUrl: './formdemo1.component.css'
})
export class Formdemo1Component {
name:string='';
age!:number;
}
