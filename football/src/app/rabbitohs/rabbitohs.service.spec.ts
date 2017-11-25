import { TestBed, inject } from '@angular/core/testing';

import { RabbitohsService } from './rabbitohs.service';
import { KeyValueExt } from './rabbitohs.model';

fdescribe('RabbitohsService', () => {

  const subsector: KeyValueExt[] = [
    { key: 'AR', value: 'Absolute Return', parentCode: 'AEQ:ALP' },
    { key: 'GER', value: 'Geared', parentCode: 'AEQ:ALP' }
  ];


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RabbitohsService]
    });
  });

  it('should be created', inject([RabbitohsService], (service: RabbitohsService) => {
    expect(service).toBeTruthy();
  }));

  it('should say Hello', (inject([RabbitohsService], (parraService, mockBackend) => {
    const expectedResult = 'Hello';
    let result = parraService.sayHello();
    expect(result).toEqual(expectedResult);
  })));

  it('should getFilterValues', (inject([RabbitohsService], (parraService, mockBackend) => {
    let result: string[] = parraService.getFilterValues("Hello");
    expect(result.length).toEqual(1);
    result = parraService.getFilterValues(["Hello", "There"]);
    expect(result.length).toEqual(2);
  })));

  it('should filterElements', (inject([RabbitohsService], (parraService, mockBackend) => {
    let result: any[] = parraService.filterElementsByField(subsector, "key", 'AR');
    expect(result.length).toEqual(1);
    result = parraService.filterElementsByField(subsector, "parentCode", 'AEQ:ALP');
    expect(result.length).toEqual(2);
  })));

  it('should filterElementsByField', (inject([RabbitohsService], (parraService, mockBackend) => {
    let result: any[] = parraService.filterElementsByField(subsector, "key", 'AR' );
    expect(result.length).toEqual(1);
    result = parraService.filterElementsByField(subsector, "key", ['AR','GER'] );
    expect(result.length).toEqual(2);
  })));

  

});
