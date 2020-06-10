import { Component, OnInit } from '@angular/core';
import { BooksService } from "../shared/books.service";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  constructor(private booksService:BooksService) { }
  items;
  ngOnInit(): void {
    this.getItems();
  }

  getItems = () =>
    this.booksService
    .getItems()
    .subscribe(res => (this.items = res));

  deleteItem = data => this.booksService.deleteItem(data);

}
