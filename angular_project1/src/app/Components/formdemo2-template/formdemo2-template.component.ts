import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formdemo2-template',
  imports: [FormsModule,CommonModule],
  standalone:true,
  templateUrl: './formdemo2-template.component.html',
  styleUrl: './formdemo2-template.component.css'
})
export class Formdemo2TemplateComponent {
  submitForm(value:any){
    console.log(value)

  }
}
