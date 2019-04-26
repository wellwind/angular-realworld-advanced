import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if (!localStorage.getItem('token')) {
      // this.router.navigateByUrl(`/login?redirect=${encodeURI(state.url)}`);
      return this.router.parseUrl(`/login?redirect=${encodeURI(state.url)}`);
    }

    return true;
  }
}
