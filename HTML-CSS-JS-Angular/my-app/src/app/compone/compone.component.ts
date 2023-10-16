import { Component, ViewChild,Input, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-compone',
  templateUrl: './compone.component.html',
  styleUrls: ['./compone.component.css']
})
export class ComponeComponent {

  var:string="Hello"
  @Input() message:any;
  @ViewChild('temp') v :ElementRef ={} as ElementRef;
  @ContentChild('tempParent') paraContent:ElementRef={} as ElementRef;

  ngAfterContentInit()
  {
    console.log("Ng After content Init ")
  }

  showMessage()
  {
    console.log(this.v.nativeElement.innerHTML)
  }
  ngAfterContentChecked(){
    console.log("ng contect checked "+this.paraContent.nativeElement.innerHTML)
  }
}

