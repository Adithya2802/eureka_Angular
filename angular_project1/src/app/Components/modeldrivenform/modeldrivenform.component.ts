import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-modeldrivenform',
  imports: [ReactiveFormsModule, CommonModule],
  standalone:true,
  templateUrl: './modeldrivenform.component.html',
  styleUrl: './modeldrivenform.component.css'
})
export class ModeldrivenformComponent {
  registerForm!: FormGroup<any>;
  ngOnInit(){

  }

  constructor(private formBuilder:FormBuilder){
this.usingFormGroup();
this.usingFormBuilder();
  }

  usingFormBuilder(){
    this.registerForm = this.formBuilder.group({

    })
  }

  usingFormGroup(){
    this.registerForm=new FormGroup({
      firstName : new FormControl('Ex:Adithya',[ Validators.required, Validators.minLength(5)]),
      lastName : new FormControl('Ex:Adithya',[ Validators.required, Validators.minLength(5)]),
      email : new FormControl(),
      address : new FormGroup({
        city : new FormControl(),
        state: new FormControl(),
        pincode: new FormControl()
      }),
    
    },{updateOn: 'submit'})
  }
  submitMyForm(formData:any){
    console.log(this.registerForm)
    console.log('from html ',formData)
  }
 

}
