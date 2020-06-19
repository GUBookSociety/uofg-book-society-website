import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { User } from './authentication/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public firestore: AngularFirestore) { }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  // to use this in a component:
    // <div class="ml-3" *ngIf="userService.user as user">
    // <p>Signed in: {{ user.Forename }} {{ user.Surname }}</p>
    // <p>ID: {{ user.id }}</p>
    // <p>Email Address: {{ user.Email }}</p>
    // </div>
  get user(): User {
    return JSON.parse(localStorage.getItem("userData"));
  }

}
