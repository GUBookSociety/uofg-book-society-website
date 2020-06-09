import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  items: Observable<any[]>;
  constructor(firestore: AngularFirestore){
    // 'items' is a coolection in our firestore
    this.items = firestore.collection('items').valueChanges();
  }

  ngOnInit(): void {
  }

}
