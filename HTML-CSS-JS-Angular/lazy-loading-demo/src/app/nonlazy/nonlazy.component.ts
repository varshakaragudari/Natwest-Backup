import { Component } from '@angular/core';

@Component({
  selector: 'app-nonlazy',
  templateUrl: './nonlazy.component.html',
  styleUrls: ['./nonlazy.component.css']
})
export class NonlazyComponent {
  constructor(){
    console.log("first")
  }

}
