import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { EmployeeService } from '../shared/employee.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private router: Router, private empService: EmployeeService){
  } 

  canActivate():boolean{
    if(this.empService.isLogin()){
      return true;
    }
    else{
      this.router.navigateByUrl('');
      return false;
    }
  }
  
}
