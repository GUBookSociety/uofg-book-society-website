import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  forename = new FormControl('');
  surname = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');

  constructor(public authService: AuthenticationService) { }

  ngOnInit(): void {

  }

}
