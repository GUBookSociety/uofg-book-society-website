import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { User } from './IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  err: string;

  constructor(public firestore: AngularFirestore, public auth: AngularFireAuth, public ngZone: NgZone, public router: Router) { }

  // returns true or false dependent on if a user is logged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('userData'));
    return (user !== null) ? true : false;
  }


  // with the given information, create an entry in Firebase Authentication and Firestore
  // this function also adds the current user information to localStorage
  signup(forename: string, surname: string, email: string, password: string) {
    this.auth.createUserWithEmailAndPassword(email, password).then((result) => {
      const userRef: AngularFirestoreDocument<any> = this.firestore.doc(`Users/${result.user.uid}`);
      userRef.set({
        "Email": email,
        "Forename": forename,
        "Surname": surname
      });
      const user = {
        id: result.user.uid,
        Email: email,
        Forename: forename,
        Surname: surname
      }
      localStorage.setItem('userData', JSON.stringify(user));
      this.err = "";
      this.ngZone.run(() => {
        this.router.navigate(['']);
      });
    }).catch((error) => {
      this.err = error.message;
    })
  }

  
  // logs in a user, provided the correct email and password
  // also sets the user's variables in localStorage via SetUserData, so they can be retrieved easily
  // password is "bookclub"
  login(email: string, password: string) {
    this.auth.signInWithEmailAndPassword(email, password).then((result) => {
      this.ngZone.run(() => {
        this.router.navigate(['']);
      });
      this.SetUserData(result.user);
      this.err = "";
    }).catch((error) => {
      this.err = error.message;
    })
  }


  // puts user data from Firebase Firestore into localStorage (so it doesn't need to go and get it every time on refresh)
  SetUserData(user): void {
    const userRef: AngularFirestoreDocument<User> = this.firestore.doc(`Users/${user.uid}`);
    userRef.get().subscribe(docRef => {
      const data = docRef.data();
      const userData = {
        id: user.uid,
        Email: data.Email,
        Forename: data.Forename,
        Surname: data.Surname
      }
      localStorage.setItem('userData', JSON.stringify(userData));
    });
  }


  // logs out the user, clears localStorage and then navigates home
  logout(): void {
    this.auth.signOut().then(() => {
      localStorage.removeItem('userData');
      this.router.navigate(['']);
    })
  }

}
