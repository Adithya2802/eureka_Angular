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
import { VsTreeComponent } from '../../Assignments/vs-tree/vs-tree.component';
import { Message1Component } from '../message1/message1.component';
import { Message2Component } from '../message2/message2.component';
import { Signaldemo1Component } from '../signaldemo1/signaldemo1.component';
import { SignalEffectComponent } from '../signal-effect/signal-effect.component';
import { Formdemo1Component } from '../formdemo1/formdemo1.component';
import { Formdemo2TemplateComponent } from '../formdemo2-template/formdemo2-template.component';

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
            Observabledemo3Component,
            VsTreeComponent,
            Message1Component,
            Message2Component,
            Signaldemo1Component,
            SignalEffectComponent,
            Formdemo1Component,
            Formdemo2TemplateComponent

       
  ],
  standalone: true,
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  flag: boolean=true;
}
