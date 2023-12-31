import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router,  ActivatedRouteSnapshot, UrlTree,RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree   {
  if(localStorage.getItem('user')){
    return true;
  }
 

  this.router.navigate(['./LoginIn']);
  return false

};
}