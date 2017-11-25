import { TestBed, inject } from '@angular/core/testing';

import { BroncoService } from './bronco.service';
import {  KeyValueExt,  ILookupExt  } from './bronco.model';

fdescribe('BroncoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroncoService]
    });
  });

  it('should be created', inject([BroncoService], (service: BroncoService) => {
    expect(service).toBeTruthy();
  }));

  it('should fetch Lookups', (inject([BroncoService], (broncoService, mockBackend) => {
    let result   = broncoService.getLookups();
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

    let filteredSubSectors = broncoService.filterLookups(subsectors, 'AEQ:ALP' );
    expect(filteredSubSectors.length).toEqual(2);

    // Fetch children
    let sector : KeyValueExt = sectors[0];
    expect(sector.key).toEqual('AEQ:ALP');
    let children = broncoService.filterLookups(subsectors, sector.key );
    expect(children.length).toEqual(2);
  })));


});
