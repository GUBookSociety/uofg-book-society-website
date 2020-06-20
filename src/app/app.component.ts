import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './shared/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uofg-book-society';
  router: Router;

  constructor(public authService: AuthenticationService, private _router: Router){
    this.router = _router; 
  }

}