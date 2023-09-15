import { ActivatedRouteSnapshot, CanActivateFn,CanMatchFn,Route, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, 
  state :RouterStateSnapshot) => {
    debugger;
    let authServis:AuthService = inject(AuthService);

    if (!authServis.isAuthenticated()) {
      // Redirect to login page
      return false;
    }

  return true;
};

export const authCanMatch: CanMatchFn = (
  route: Route, 
  segments: UrlSegment[]) => {
    //debugger;
    let authServis:AuthService = inject(AuthService);

    if (!authServis.isAuthenticated()) {
      // Redirect to login page
      return false;
    }

  return true;
}

