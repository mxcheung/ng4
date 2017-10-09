import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.css']
})
export class BallComponent implements OnInit {

  message: String;
  
  constructor() { }

  ngOnInit() {
    this.message = 'hello';
  }

}
