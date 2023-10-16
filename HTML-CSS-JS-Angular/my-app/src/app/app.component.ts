import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserdataService } from './userdata.service';
import { PrintService } from './services/print.service'

import { ActivatedRoute } from '@angular/router'
import { AuthServiceService } from './services/auth-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PrintService]
})
//model class 
export class AppComponent{
  title:any='from parent';

  fromParent="Hi "
  
  showMessage(s:any)
  {
   
  }

 
  //data:any;
//   constructor(private x :PrintService){
//     //this.data=x.printData();
//   }
//   show()
//   {
//       console.log(this.x)
//       this.data=this.x.printData();
//   }
  


// user:any;
//   pass:any;
//   userLogin(item: any) {

//     console.log(item)
//     this.user=item.login;

//     console.log("Login id is "+this.user)
//   }

//   fromChild:number=100;
//   userDetails=[
//     {name:'Varsha',email:'varsha@gmail.com',phone:['11111','00000']},
//     {name:'Harsha',email:'Harsha@gmail.com',phone:['2222','00000']},
//     {name:'Geeta',email:'Geeta@gmail.com',phone:['3333','00000']},
//     {name:'Seeta',email:'Seeta@gmail.com',phone:['444','00000']},
//     {name:'Neeta',email:'Naeeta@gmail.com',phone:['555','00000']}
//   ]
  
//   updateData(item:string )
//   {
//     console.log(item)
//   }

  users:any;
  constructor(private userData:UserdataService,private a:AuthServiceService){
    userData.users().subscribe((data)=>{
      this.users=data;
      console.log(this.users)
    })
  }

  data=[{
    "id": 1111,
    "title": "Nokia "
  }];
  saveData()
    {
        
        this.userData.saveUser(this.data).subscribe( (result)=>{
        console.log(result)
      })
    }

    logIn()
    {
      this.a.logIn();

    }
    logOut()
    {
      this.a.logOut();
    }

    ngDoCheck()
    {
      console.log("ng do check ")
    }
}