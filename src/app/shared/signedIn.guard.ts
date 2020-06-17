import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SignedInAuthGuard implements CanActivate {
  
  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.user) {
      window.alert('Access denied, you\'re already signed in, so can\'t access this page!\nYou will be redirected to the home screen.')
      this.router.navigate([''])
    }
    return true;
  }

}