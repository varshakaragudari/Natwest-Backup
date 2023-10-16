import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import {AuthServiceService} from '../services/auth-service.service'
@Injectable({
  providedIn: 'root'
})
export class CourseGuardService   {

  constructor(private a:AuthServiceService,private r:Router ) { }

  xyz(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.a.isLoggedIn())
    return true;
  else
    this.r.navigate(['']);
  return false; 
  }
  
}

