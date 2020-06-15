import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private firestore: AngularFirestore) {

  }

  // Should return a type of oberserable, can be done after we make a model
  getItems() {
    return this.firestore.collection("items").snapshotChanges();
  }

  createItem(data){
    return new Promise<any>((resolve, reject)=>
    {
      this.firestore
        .collection("items")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }

  deleteItem(data){
    return this.firestore
      .collection("items")
      .doc(data.payload.doc.id)
      .delete();
  }

  form = new FormGroup({
    name: new FormControl('',[
      Validators.required
    ]),
    price: new FormControl('',[
      Validators.required
    ]),
  });
}
