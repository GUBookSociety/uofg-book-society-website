import { Component, OnInit } from '@angular/core';
import { BooksService } from '../shared/books.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {


  constructor(public booksService: BooksService) { }

  ngOnInit(): void {
  }

  removeItem(item) {

  }
  
  onSubmit() {
    let data = this.booksService.form.value;

    this.booksService.createItem(data)
      .then(res => {
        this.booksService.form.reset()
      });
    this.booksService.form.reset();
  }
}
