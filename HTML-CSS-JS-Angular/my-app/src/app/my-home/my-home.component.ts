import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent {

  myId:any;
  constructor(private x:ActivatedRoute) {
    
  }
  ngOnInit()
  {
    console.log("id in init "+this.x.snapshot.paramMap.get('id'));
    this.myId=this.x.snapshot.paramMap.get('id');
  }
}
