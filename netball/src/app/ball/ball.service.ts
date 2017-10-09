import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';


const URL: string = 'http://localhost:8080';



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

  getProductsMock(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let somedata = this.http.get(`${URL}/api/products`, options)
      .map((response: Response) => { console.log(response.json()); return <any>response.json() })
      .catch(this.handleError);

    return somedata;
  }

  private handleError(error: Response) {
    return Observable.throw(error.text());
  }


}
