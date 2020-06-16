import { Component, OnInit } from '@angular/core';
import { BooksService } from "../shared/books.service";
import { Book } from '../shared/models/book.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  constructor(private bookStorage: BooksService) { }
  books: Set<Book>;
  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.books = this.bookStorage.getBooks();
  }

  deleteBook(data) { 
    this.bookStorage.deleteBook(data);
  }

}
