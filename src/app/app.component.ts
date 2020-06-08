import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uofg-book-society';
  items: Observable<any[]>;
  constructor(firestore: AngularFirestore){
    // 'items' is a coolection in our firestore
    this.items = firestore.collection('items').valueChanges();
  }
}
