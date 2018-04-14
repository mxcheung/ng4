import { Component, OnInit, ViewChild } from '@angular/core';
import { SideNavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  events = [];
  @ViewChild('sidenav') public sidenav: SideNavComponent;
  constructor() { }

  ngOnInit() {
  }

  showNav(event: boolean): void {
   // this.sidenav.show();
  }
}
