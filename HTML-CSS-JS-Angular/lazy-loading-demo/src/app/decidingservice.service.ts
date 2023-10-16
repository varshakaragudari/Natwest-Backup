import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DecidingserviceService {

  constructor() { }

  loggedIn :boolean=false;

  getVal()
  {
    return this.loggedIn;
  }
}
