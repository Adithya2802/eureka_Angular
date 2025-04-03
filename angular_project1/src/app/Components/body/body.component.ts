import { Component } from '@angular/core';
import { EmployeeCRUDComponent } from "../../Assignments/employee-crud/employee-crud.component";
import { PipesComponent } from '../../Assignments/pipes/pipes.component';
import { LifeCycleHooksComponent } from '../life-cycle-hooks/life-cycle-hooks.component';
import { EmployeeComponent } from '../../Assignments/employee/employee.component';
import { TrafficlightComponent } from '../trafficlight/trafficlight.component';
import { ParentComponent } from '../parent/parent.component';
import { Demo1Component } from '../demo1/demo1.component';
import { Demo2Component } from '../demo2/demo2.component';
import { EmployeewithserviceComponent } from '../../Assignments/employeewithservice/employeewithservice.component';

@Component({
  selector: 'app-body',
  imports: [
            PipesComponent,
            LifeCycleHooksComponent,
            EmployeeComponent,
            TrafficlightComponent,
            ParentComponent,
            Demo1Component,
            Demo2Component,
            EmployeewithserviceComponent

       
  ],
  standalone: true,
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  flag: boolean=true;
}
