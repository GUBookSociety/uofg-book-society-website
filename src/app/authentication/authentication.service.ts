import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { User } from './IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  uid: string;
  authuser: Observable<firebase.User>;
  err: string;
  userData: any; // Save logged in user data

  constructor(public afs: AngularFirestore, public auth: AngularFireAuth, public ngZone: NgZone, public router: Router) {    
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
        this.uid = result.user.uid;
        this.SetUserData(result.user);
      }).catch((error) => {
        this.err = error.message;
      })

    // this.auth.signInWithEmailAndPassword(email, password).catch(error => {
    //   this.err = error.message;
    // });;
  }

  logout() {
    this.auth.signOut().then(() => {
      // this.userData = null;
      localStorage.removeItem('user');
      localStorage.removeItem('userData');
      this.router.navigate(['']);
    })
  }


  SetUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`Users/${this.uid}`);
    // userRef.snapshotChanges().subscribe(res => (console.log(res.payload.data().Forename)));
    // userRef.snapshotChanges().subscribe(res => (this.item = res));
    userRef.get().subscribe(docRef => {
      const data = docRef.data();
      const user = {
        id: this.uid,
        Email: docRef.data().Email,
        Forename: data.Forename,
        Surname: data.Surname
      }
      localStorage.setItem('userData', JSON.stringify(user));
    });
  }

}
