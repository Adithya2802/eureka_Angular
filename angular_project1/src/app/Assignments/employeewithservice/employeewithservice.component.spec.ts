import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeewithserviceComponent } from './employeewithservice.component';

describe('EmployeewithserviceComponent', () => {
  let component: EmployeewithserviceComponent;
  let fixture: ComponentFixture<EmployeewithserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeewithserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeewithserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
