import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
  loggedIn:boolean=false;;

  logIn()
  {
      this.loggedIn=true;
  }
 logOut()
  {
      this.loggedIn=false;
  }
  isLoggedIn()
  {
      return this.loggedIn;
  }
}
