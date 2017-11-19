import { TestBed, inject } from '@angular/core/testing';

import { ParraService } from './parra.service';
import { KeyValuePair } from './parra.model';

describe('ParraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParraService]
    });
  });

  it('should be created', inject([ParraService], (service: ParraService) => {
    expect(service).toBeTruthy();
  }));

  it('should say Hello', (inject([ParraService], (parraService, mockBackend) => {
    const expectedResult = 'Hello';
    let result = parraService.sayHello();
    expect(result).toEqual(expectedResult);
  })));

  it('should fetch tasks', (inject([ParraService], (parraService, mockBackend) => {
    let tasks: any[] = parraService.getTasks();
    expect(tasks.length).toEqual(3);
  })));

  it('should fetch tasks by key', (inject([ParraService], (parraService, mockBackend) => {
    let task: KeyValuePair = parraService.getTaskByKey('abc');
    expect(task.key).toEqual('abc');
    expect(task.value).toEqual('120');

    task = parraService.getTaskByKey('def');
    expect(task.key).toEqual('def');
    expect(task.value).toEqual('240');

  })));

  it('should fetch tasks by value', (inject([ParraService], (parraService, mockBackend) => {
    let tasks: KeyValuePair[] = parraService.getTaskByValue('120');
    expect(tasks.length).toEqual(1);
    let task: KeyValuePair = tasks[0];
    expect(task.key).toEqual('abc');
    expect(task.value).toEqual('120');

    tasks = parraService.getTaskByValue('240');
    expect(tasks.length).toEqual(2);
  })));

  it('should fetch kv', (inject([ParraService], (parraService, mockBackend) => {
    let kv: KeyValuePair = parraService.getKV();
    expect(kv.key).toEqual('abc');
    expect(kv.value).toEqual('zzz');
  })));


});
