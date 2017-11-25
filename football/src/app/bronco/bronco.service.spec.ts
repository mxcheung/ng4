import { TestBed, inject } from '@angular/core/testing';

import { BroncoService } from './bronco.service';
import { KeyValueExt, ILookupExt } from './bronco.model';




fdescribe('BroncoService', () => {

  const assetClass: KeyValueExt[] = [
    { key: 'AEQ', value: 'Aust Eq', parentCode: '' },
    { key: 'FI', value: 'Fixed Interest', parentCode: '' },
    { key: 'PI', value: 'Property', parentCode: '' }
  ];
  
  const sector: KeyValueExt[] = [
    { key: 'AEQ:ALP', value: 'Aust Large Cap', parentCode: 'AEQ' },
    { key: 'ASC', value: 'Aust Small Company', parentCode: 'AEQ' },
    { key: 'ETF', value: 'ETF', parentCode: 'ETF' }
  ];
  
  const subsector: KeyValueExt[] = [
    { key: 'AR', value: 'Absolute Return', parentCode: 'AEQ:ALP' },
    { key: 'GER', value: 'Geared', parentCode: 'AEQ:ALP' }
  ];
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroncoService]
    });
  });

  it('should be created', inject([BroncoService], (service: BroncoService) => {
    expect(service).toBeTruthy();
  }));

  it('should fetch Lookups', (inject([BroncoService], (broncoService, mockBackend) => {
    let result = broncoService.getLookups();
    expect(Object.keys(result).length).toEqual(3);
  })));

  it('should fetch Lookup by key', (inject([BroncoService], (broncoService, mockBackend) => {
    let result = broncoService.getLookup('sector');
    expect(Object.keys(result).length).toEqual(3);
  })));

  it('should fetch Lookup by hierarchy', (inject([BroncoService], (broncoService, mockBackend) => {
    let assetclasses = broncoService.getLookup('assetClass');
    let sectors = broncoService.getLookup('sector');
    let subsectors = broncoService.getLookup('subsector');
    expect(assetclasses.length).toEqual(3);
    expect(sectors.length).toEqual(3);
    expect(subsectors.length).toEqual(2);

    let filteredSubSectors = broncoService.filterLookups(subsectors, 'AEQ:ALP');
    expect(filteredSubSectors.length).toEqual(2);

    // Fetch children
    let sector: KeyValueExt = sectors[0];
    expect(sector.key).toEqual('AEQ:ALP');
    let children = broncoService.filterLookups(subsectors, sector.key);
    expect(children.length).toEqual(2);
  })));

  it('should access local lookup length', (inject([BroncoService], (broncoService, mockBackend) => {
    expect(assetClass.length).toEqual(3);
    expect(sector.length).toEqual(3);
    expect(subsector.length).toEqual(2);
  })));


});
