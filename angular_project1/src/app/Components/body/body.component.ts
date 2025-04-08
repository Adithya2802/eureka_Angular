import { Observabledemo2Component } from './../observabledemo2/observabledemo2.component';
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
import { HttpDemo1Component } from '../http-demo1/http-demo1.component';
import { UserCrudHttpComponent } from '../user-crud-http/user-crud-http.component';
import { HttpDemo2Component } from '../http-demo2/http-demo2.component';
import { Observabledemo1Component } from '../observabledemo1/observabledemo1.component';
import { Observabledemo3Component } from '../observabledemo3/observabledemo3.component';

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
            EmployeewithserviceComponent,
            HttpDemo1Component,
            UserCrudHttpComponent,
            HttpDemo2Component,
            Observabledemo1Component,
            Observabledemo2Component,
            Observabledemo3Component

       
  ],
  standalone: true,
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  flag: boolean=true;
}
