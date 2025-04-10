import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsTreeComponent } from './vs-tree.component';

describe('VsTreeComponent', () => {
  let component: VsTreeComponent;
  let fixture: ComponentFixture<VsTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VsTreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
