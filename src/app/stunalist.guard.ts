import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StunalistService } from './stunalist.service';

@Injectable({
  providedIn: 'root'
})
export class StunalistGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  constructor(private _stunalistService:StunalistService,private _router:Router){}
  canActivate():boolean{
    if(this._stunalistService.isLoggedIn()!==true){
      window.alert("Access not allowd without login");
      this._router.navigate(['/login']);
    }
    return true;
  }
}
