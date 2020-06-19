import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { AuthenticationService } from '../shared/authentication/authentication.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(public userService: UserService){
    
  }

  ngOnInit(): void {

  }

}
