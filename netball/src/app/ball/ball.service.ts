import { Injectable } from '@angular/core';

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
  constructor() { }

  getMessage(): string {
    return "BallService Messages";
  }

  getProducts() {
    return this.PRODUCTS;
  }

}
