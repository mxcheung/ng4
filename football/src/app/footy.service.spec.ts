import { async, ComponentFixture, TestBed, inject, fakeAsync } from '@angular/core/testing';

import { FootyService } from './footy.service';

fdescribe('FootyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FootyService]
    });
  });

  it('should be created', inject([FootyService], (service: FootyService) => {
    expect(service).toBeTruthy();
  }));

  it('should say Hello', async(inject([FootyService], (footyService, mockBackend) => {
    const expectedResult = 'Hello';
    let result = footyService.sayHello();
    expect(result).toEqual(expectedResult);
   })));

   it('should fetch tasks', async(inject([FootyService], (footyService, mockBackend) => {
    let tasks : any[] = footyService.getTasks();
    expect(tasks.length).toEqual(3);
   })));

   it('should fetch tasks name', async(inject([FootyService], (footyService, mockBackend) => {
    let tasks : String[] = footyService.getTaskNames();
    expect(tasks.length).toEqual(3);
    expect(tasks[0]).toEqual('Write for Envato Tuts+');
    expect(tasks.indexOf('Work out')).toEqual(1);
    expect(tasks.indexOf('dummy does not exist')).toEqual(-1);
  })));

});
