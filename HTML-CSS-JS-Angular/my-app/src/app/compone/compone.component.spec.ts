import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponeComponent } from './compone.component';

describe('ComponeComponent', () => {
  let component: ComponeComponent;
  let fixture: ComponentFixture<ComponeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponeComponent]
    });
    fixture = TestBed.createComponent(ComponeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test Hello', () => {
    expect(component.var).toBe("Hello");
  });
});
