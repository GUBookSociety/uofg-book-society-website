import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { User } from '../authentication/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  id: string;

  constructor(public firestore: AngularFirestore) { 
    // this.id = JSON.parse(localStorage.getItem('user')).uid;
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  // to use this in a component:
    // this.userService.getUserData().subscribe(userRef => this.forename = userRef.payload.data().Forename);
    // with no parameter, this function defaults to current user
    // id: string = this.id
  get user(): User {
    return JSON.parse(localStorage.getItem("userData"));
  }

}
