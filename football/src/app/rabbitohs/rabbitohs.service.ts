import { Injectable } from '@angular/core';
import { KeyValueExt } from './rabbitohs.model';

@Injectable()
export class RabbitohsService {

    sayHello(): string {
        return "Hello";
    }

    getFilterValues(filtervalues: string[] | string): string[] {
        let values: string[] = [];
        let filteredElements: any[];
        if (typeof filtervalues === 'string') {
            values.push(filtervalues);
        } else {
            values = filtervalues;
        }
        return values
    }

    filterElementsByField(elements: any[], fieldname: string, filtervalues: string[] | string ): any[] {
        let filteredElements: any[];
        let values = this.getFilterValues(filtervalues);
        if (values.length > 0) {
            filteredElements = elements.filter(element => (values.indexOf(element[fieldname]) !== -1));
        }
        return filteredElements;
    }

}
