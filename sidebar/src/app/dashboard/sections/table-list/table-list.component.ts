import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {
   ELEMENT_DATA: Element[] = [
    {position: 1, name: 'Dakota Rice', country: 'Niger', city: 'Oud-Turnhout', salary: 36738},
    {position: 2, name: 'Minerva Hooper', country: 'Curaçao', city: 'Sinaai-Waas', salary: 23789}
  ];

  constructor() { }

  ngOnInit() {
  }

}

export interface Element {
  city: string;
  country: string;
  name: string;
  position: number;
  salary: number;
}



