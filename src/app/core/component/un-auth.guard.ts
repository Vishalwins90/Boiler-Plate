import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router,  ActivatedRouteSnapshot, UrlTree,RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class unAuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree   {
  if(localStorage.getItem('user')){
    this.router.navigate(['./home']);
    return false;
  }
 
else{
  // this.router.navigate(['./LoginIn']);
  return true
}

};
}