import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivedemoComponent } from './reactivedemo.component';

describe('ReactivedemoComponent', () => {
  let component: ReactivedemoComponent;
  let fixture: ComponentFixture<ReactivedemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactivedemoComponent]
    });
    fixture = TestBed.createComponent(ReactivedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
