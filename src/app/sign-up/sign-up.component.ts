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
  email = new FormControl('');
  password = new FormControl('');

  constructor(public authService: AuthenticationService) { }

  ngOnInit(): void {
  }

}
