import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponentComponent } from './test-component.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TestComponentComponent', () => {
  let component: TestComponentComponent;
  let fixture: ComponentFixture<TestComponentComponent>;

  let h1:HTMLElement;

  let h2:HTMLElement
  let deb:DebugElement

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponentComponent]
    });
    fixture = TestBed.createComponent(TestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h1=fixture.nativeElement.querySelector('h1');
    h2=fixture.nativeElement.querySelector('h2');
    deb=fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Test getMessage should return Hello ",()=>{
    expect(component.getMessage()).toEqual("hello")
  });

  it(" x should be true  ",()=>{
        expect(component.x).toBeTrue();
  })

  it('Testing button functionality ',()=>{

    component.getResults(23,45);
    fixture.detectChanges();
    expect(h1.textContent).toBe(component.studentResult)
  })
  
  it('verify increase count ',()=>{
    const h2=deb.query(By.css('h2'));
    const btn=deb.query(By.css('#mybtn'))

    btn.triggerEventHandler('click',{});
    fixture.detectChanges();

    expect(component.countno).toEqual(parseInt(h2.nativeElement.innerText))
  })
});
