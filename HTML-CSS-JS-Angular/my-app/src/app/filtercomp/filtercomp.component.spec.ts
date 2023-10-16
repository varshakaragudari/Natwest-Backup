import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltercompComponent } from './filtercomp.component';

describe('FiltercompComponent', () => {
  let component: FiltercompComponent;
  let fixture: ComponentFixture<FiltercompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltercompComponent]
    });
    fixture = TestBed.createComponent(FiltercompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
