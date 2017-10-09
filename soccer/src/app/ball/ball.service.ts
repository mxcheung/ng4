import { Injectable } from '@angular/core';

@Injectable()
export class BallService {

  constructor() { }

  getMessage(): string{
    return "BallService Messages";
  }

}
