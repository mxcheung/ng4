import { Component, OnInit, ViewChild } from '@angular/core';
import { SideNavComponent } from '../sidenav/sidenav.component';
import {AppConfig} from '../../config/app.config';
import {Router} from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  events = [];
  @ViewChild('sidenav') public sidenav: SideNavComponent;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate([AppConfig.routes.dashboard + '/overview']);
  }

  showNav(event: boolean): void {
   // this.sidenav.show();
  }
}
