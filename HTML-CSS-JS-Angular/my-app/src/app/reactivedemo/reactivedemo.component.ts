import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-reactivedemo',
  templateUrl: './reactivedemo.component.html',
  styleUrls: ['./reactivedemo.component.css']
})
export class ReactivedemoComponent {
  loginform=new FormGroup({
        control1:new FormControl('Varsha',[Validators.required]),
        control2:new FormControl('')
  })
  getData(){
    console.log(this.loginform.value.control1)
  }
  get control1()
  {
    return this.loginform.get('control1');
  }
}
