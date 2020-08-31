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
    if(confirm("Are you sure you want to delete this book?")){
      this.bookStorage.deleteBook(data);
    }
  }

  saveBookOnClick(book: Book) {
    localStorage.setItem('currentBook', JSON.stringify(book));
  }

}
