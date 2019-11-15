import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isLogin:boolean = false;
  constructor(private router: Router){
    if(localStorage.getItem('login')=='true'){
      this.isLogin = true;
    }
    else{
      this.isLogin = false;
    }
  }

  canActivate():boolean{

    if(this.isLogin){
      return true;
    }
    else{
      this.router.navigateByUrl('');
      return false;
    }

  }
  
}
