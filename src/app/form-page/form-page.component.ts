import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {
 
  bookForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }
  name:string = 'The Gunslinger';
  price:number = 5;

  onSubmit(): void{
    this.name = this.bookForm.get('name').value;
    this.price = this.bookForm.get('price').value;
    this.bookForm.reset();
  }

}
