import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: Observable<firebase.User>;
  err: string;

  constructor(public auth: AngularFireAuth) { this.user = this.auth.user; }

  getUser() {
    return this.user;
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
  login(email: string, password: string): void {
    this.auth.signInWithEmailAndPassword(email, password).catch(error => {
      this.err = error.message;
    });;
  }

  logout(): void {
    this.auth.signOut();
  }

}
