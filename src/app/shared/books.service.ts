import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';
import { Book } from './models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Set<Book> = new Set();

  constructor(private firestore: AngularFirestore) {

  }

  // Should return a type of oberserable, can be done after we make a model
  getBooks(): Set<Book> {
    let data = this.firestore.collection("Books").snapshotChanges();
    data
      .subscribe(res => {
        this.books.clear();
        res.forEach(ele => {
          this.books.add({
            id: ele.payload.doc.id,
            name: ele.payload.doc.get('Name'),
            author: ele.payload.doc.get('Author'),
            avgRating: ele.payload.doc.get('Rating'),
            month: ele.payload.doc.get('Month'),
            pageCount: ele.payload.doc.get('PageCount'),
          })
        })
      });
    
    return this.books;
  }

  createBook(data) {
    let ret = new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("Books")
        .add(data)
        .then(res => { }, err => reject(err));
    });

    return ret;
  }

  deleteBook(book: Book) {
    if (this.books.has(book)) {
      this.books.delete(book);
    }

    return this.firestore
      .collection("Books")
      .doc(book.id)
      .delete();
  }

  form = new FormGroup({
    Name: new FormControl('', [
      Validators.required
    ]),
    Author: new FormControl('', [
      Validators.required
    ]),
    PageCount: new FormControl('', [
      Validators.required
    ]),
    // THis will later be added by taking user reviews for the book
    Rating: new FormControl('', [
      Validators.required
    ]),
    Month: new FormControl('', [
      Validators.required
    ]),
  });
}
