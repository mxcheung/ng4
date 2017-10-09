import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';


const URL: string = 'http://localhost:8080/api/products';



@Injectable()
export class BallService {

  PRODUCTS = [
    {
      'productName': 'Product A',
      'productId': 'A1',
      'active': true
    },
    {
      'productName': 'Product B',
      'productId': 'B1',
      'active': true
    },
    {
      'productName': 'Product C',
      'productId': 'C1',
      'active': true
    },
    {
      'productName': 'Product D',
      'productId': 'D1',
      'active': true
    }
  ];
  constructor(private http: Http) { }

  getMessage(): string {
    return "BallService Messages";
  }

  getProducts() {
    return this.PRODUCTS;
  }

}
