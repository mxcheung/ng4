import { Injectable } from '@angular/core';
import {  KeyValueExt,  ILookupExt  } from './bronco.model';

@Injectable()
export class BroncoService {

  
  assetClass: KeyValueExt[] = [
    {
      key: 'AEQ',
      value: 'Aust Eq',
      parentCode: ''
    },
    {
      key: 'FI',
      value: 'Fixed Interest',
      parentCode: ''
    },
    {
      key: 'PI',
      value: 'Property',
      parentCode: ''
    }
  ];

  sector: KeyValueExt[] = [
    {
      key: 'AEQ:ALP',
      value: 'Aust Large Cap',
      parentCode: 'AEQ'
    },
    {
      key: 'ASC',
      value: 'Aust Small Company',
      parentCode: 'AEQ'
    },
    {
      key: 'ETF',
      value: 'ETF',
      parentCode: 'ETF'
    }
  ];

  subsector: KeyValueExt[] = [
    {
      key: 'AR',
      value: 'Absolute Return',
      parentCode: 'AEQ:ALP'
    },
    {
      key: 'GER',
      value: 'Geared',
      parentCode: 'AEQ:ALP'
    }
  ];

  lookups : ILookupExt = {};
  
  constructor() { 
    this.lookups["assetClass"] = this.assetClass;
    this.lookups["sector"] = this.sector;
    this.lookups["subsector"] = this.subsector;
  }

  public getLookups(): ILookupExt {
    return this.lookups;
  }

  public filterLookups( lookups : KeyValueExt[] , parentcode : string):  KeyValueExt[]  {
    let filteredLookup = lookups.filter(lookup => (lookup.parentCode === parentcode));
    return filteredLookup;
  }

  public getLookup(key : string):  KeyValueExt[] {
    return this.lookups[key];
  }




}
