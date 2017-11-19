import { Injectable } from '@angular/core';
import { KeyValuePair } from './parra.model';

@Injectable()
export class ParraService {

  tasks: KeyValuePair[] = [
    {
      key: 'abc',
      value: '120'
    },
    {
      key: 'def',
      value: '240'
    },
    {
      key: 'ghi',
      value: '240'
    }
  ];


  constructor() { }

  sayHello(): string {
    return "Hello";
  }

  public getTasks(): KeyValuePair[] {
    return this.tasks;
  }

  public getTaskByKey(key: string): KeyValuePair {
    return this.tasks.filter(task => task.key === key)[0];
  }

  public getTaskByValue(value: string): KeyValuePair[] {
    return this.tasks.filter(task => task.value === value);
  }

  public getKV(): KeyValuePair {
    let kv: KeyValuePair = {
      key: 'abc',
      value: 'zzz'
    }
    return kv;
  }

}
