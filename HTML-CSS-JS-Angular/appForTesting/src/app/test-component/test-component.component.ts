import { Component } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent {

  x:boolean=true;
  studentResult:any='';
  getMessage()
  {
    return "hello";
  }
  getResults(x:number,y:number)
  {
    if((x+y)>50)
    this.studentResult= "pass";
    else
    this.studentResult= "fail"
  }

  countno=0;
  inc()
  {
      this.countno+=1;
  }
  dec()
  {
      this.countno-=1;
  }
}
