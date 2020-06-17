import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  
  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log("authStatus: " + (this.authService.isLoggedIn));
      if (this.authService.isLoggedIn !== true) {
        window.alert('Access denied, login is required to access this page!\nYou will be redirected to the login screen.')
        this.router.navigate(['signIn'])
      }
      return true;
    }

}