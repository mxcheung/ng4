import { Component, OnInit } from '@angular/core';
import { BallService } from './ball.service';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.css']
})
export class BallComponent implements OnInit {

  message: String;
  products: any;
  productsMocks: any;

  constructor(private ballService: BallService) { }

  ngOnInit() {
    //  this.message = 'hello';
    this.message = this.ballService.getMessage();
    this.products = this.ballService.getProducts();

    this.ballService.getProductsMock().subscribe(productsMocks => {
      this.productsMocks = productsMocks;

      console.log('this.productsMocks=' + this.productsMocks);


    });

  }

}
