import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadArraySearchSortPaginationComponent } from './read-array-search-sort-pagination.component';

describe('ReadArraySearchSortPaginationComponent', () => {
  let component: ReadArraySearchSortPaginationComponent;
  let fixture: ComponentFixture<ReadArraySearchSortPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadArraySearchSortPaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadArraySearchSortPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
