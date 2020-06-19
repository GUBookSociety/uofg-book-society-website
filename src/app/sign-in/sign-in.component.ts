import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication/authentication.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');
  hide = true;

  constructor(public authService: AuthenticationService) { }

  ngOnInit(): void {

  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
