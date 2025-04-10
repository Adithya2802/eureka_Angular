import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formdemo2TemplateComponent } from './formdemo2-template.component';

describe('Formdemo2TemplateComponent', () => {
  let component: Formdemo2TemplateComponent;
  let fixture: ComponentFixture<Formdemo2TemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formdemo2TemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formdemo2TemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
