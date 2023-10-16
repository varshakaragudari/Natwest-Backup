import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonlazyComponent } from './nonlazy.component';

describe('NonlazyComponent', () => {
  let component: NonlazyComponent;
  let fixture: ComponentFixture<NonlazyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonlazyComponent]
    });
    fixture = TestBed.createComponent(NonlazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
