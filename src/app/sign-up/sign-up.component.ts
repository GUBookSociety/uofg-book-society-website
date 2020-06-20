import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthenticationService } from '../shared/authentication/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  forename = new FormControl('');
  surname = new FormControl('');
  signUpEmail = new FormControl('');
  password = new FormControl('');
  hide = true;

  constructor(public authService: AuthenticationService) { }

  ngOnInit(): void {
    this.authService.err = "";
  }

  getErrorMessage() {
    if (this.signUpEmail.hasError('required')) {
      return 'You must enter a value';
    }

    return this.signUpEmail.hasError('email') ? 'Not a valid email' : '';
  }

}
