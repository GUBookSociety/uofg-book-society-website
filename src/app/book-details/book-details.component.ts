import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BooksService } from '../shared/books.service';
import { Book } from '../shared/models/book.model';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book : Book;
  books: Set<Book>;
  imageUrl;

  constructor(
    private route: ActivatedRoute, 
    private bookService: BooksService, 
    private location: Location,
    private afStroage: AngularFireStorage) { }

  ngOnInit(): void {
    this.book = JSON.parse(localStorage.getItem('currentBook'));
    if(this.book){
      this.imageUrl = this.afStroage.ref('/'+ (this.book.name.toLowerCase()) + '.jpg').getDownloadURL();
    }
  }

}
