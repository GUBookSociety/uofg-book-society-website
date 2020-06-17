import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authuser: Observable<firebase.User>;
  err: string;
  userData: any; // Save logged in user data

  constructor(public auth: AngularFireAuth, public ngZone: NgZone, public router: Router) {    
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.authuser = auth.user;
    this.auth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    return (user !== null) ? true : false;
  }

  getError(): string {
    return this.err;
  }

  signup(email: string, password: string): void {
    this.auth.createUserWithEmailAndPassword(email, password).catch(error => {
      this.err = error.message;
    });;
  }

  // password is "bookclub"
  login(email: string, password: string) {

    this.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['']);
        });
        // this.SetUserData(result.user);
      }).catch((error) => {
        this.err = error.message;
      })

    // this.auth.signInWithEmailAndPassword(email, password).catch(error => {
    //   this.err = error.message;
    // });;
  }

  logout() {
    this.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['']);
    })
  }

}
