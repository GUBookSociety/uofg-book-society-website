import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BooksService } from '../shared/books.service';
import { Book } from '../shared/models/book.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book : Book;
  books: Set<Book>;

  constructor(
    private route: ActivatedRoute, 
    private bookService: BooksService, 
    private location: Location) { }

  ngOnInit(): void {
    this.book = JSON.parse(localStorage.getItem('currentBook'));
  }

}
