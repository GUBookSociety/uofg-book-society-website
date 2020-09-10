import { Component, OnInit } from '@angular/core';
import { BooksService } from '../shared/books.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {
  selectedImage: File = null

  constructor(public booksService: BooksService) { }

  ngOnInit(): void {
  }

  onFileChanged(event){
    this.selectedImage = event.target.files[0]
    const typeString = this.selectedImage.type;
    if(!typeString.includes("image/")){
      alert("Please only upload image files");
      this.selectedImage = null;
    }
  }

  onSubmit() {
    // Update the form information that is hidden from the user so we send this off
    // to the firestore as a data package. 
    if(this.selectedImage){
      this.booksService.form.controls['PictureURL'].setValue(`/${this.selectedImage.name}`);
    }
    let data = this.booksService.form.value;

    this.booksService.createBook(data, this.selectedImage)
      .then(res => {
        this.booksService.form.reset()
      });
    this.booksService.form.reset();
    this.selectedImage = null;
  }
}
