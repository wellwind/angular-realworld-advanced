import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  hasLogin = false;

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    if (!this.hasLogin) {
      this.router.navigate(['/', 'login']);
    }
    return of(true).pipe(delay(300));
  }
}
