import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingComponentsComponent } from './databinding-components.component';

describe('DatabindingComponentsComponent', () => {
  let component: DatabindingComponentsComponent;
  let fixture: ComponentFixture<DatabindingComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabindingComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabindingComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
