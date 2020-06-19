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

  err: string;

  constructor(public firestore: AngularFirestore, public auth: AngularFireAuth, public ngZone: NgZone, public router: Router) { }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('userData'));
    return (user !== null) ? true : false;
  }

  signup(forename, surname, email, password) {
    return this.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
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
        this.router.navigate(['']);
      }).catch((error) => {
        this.err = error.message;
      })
  }

  // password is "bookclub"
  login(email: string, password: string) {

    this.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['']);
        });
        this.SetUserData(result.user);
        this.err = "";
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
      localStorage.removeItem('userData');
      this.router.navigate(['']);
    })
  }


  SetUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.firestore.doc(`Users/${user.uid}`);
    // userRef.snapshotChanges().subscribe(res => (console.log(res.payload.data().Forename)));
    // userRef.snapshotChanges().subscribe(res => (this.item = res));
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

}
