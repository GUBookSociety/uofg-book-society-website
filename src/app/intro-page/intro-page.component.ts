import { Component, OnInit } from '@angular/core';

declare var anime: any;

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.css']
})
export class IntroPageComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    anime({
      targets: '#logo, .topNavbar',
      translateY: [-150, 0],
      opacity: [0, 1],
      easing: 'easeInOutQuart',
      duration: 500,
      delay: 500
    });
  }

  mouseEnter(link){
    anime({
      targets: link,
      translateY: [0, 5],
      easing: 'easeInOutQuart',
      duration: 200,
    });
  }

  mouseLeave(link){
    anime({
      targets: link,
      translateY: [5, 0],
      easing: 'easeInOutQuart',
      duration: 200,
    });
  }

}
