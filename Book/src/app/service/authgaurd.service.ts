import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthgodService implements CanActivate {
  constructor(private _loginService: LoginService, private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<any> {
    // check if the user is logged in
    // if user is not logged in (false) route him to another url
    if (this._loginService.isUserLoggedIn()) {
      console.log(`Hello`);
      return true;
    } else {
      alert('please login');
      this._router.navigate(['login'], {
        queryParams: { returnUrl: route.url },
      });
    }
    return false;
  }
}
