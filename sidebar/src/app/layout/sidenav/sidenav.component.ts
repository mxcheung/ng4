import { Component, OnInit, ViewChild, Input, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { MatSidenavModule } from '@angular/material/sidenav';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '.', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: 'dashboard2', title: 'Dashboard2', icon: 'dashboard', class: '' },
  { path: 'heroes', title: 'Heros', icon: 'android', class: '' },
  { path: 'user-profile', title: 'User Profile', icon: 'person', class: '' },
  { path: 'table-list', title: 'Table List', icon: 'content_paste', class: '' },
  { path: 'typography', title: 'Typography', icon: 'library_books', class: '' },
  { path: 'icons', title: 'Icons', icon: 'bubble_chart', class: '' },
  { path: 'maps', title: 'Maps', icon: 'location_on', class: '' },
  { path: 'notifications', title: 'Notifications', icon: 'notifications', class: '' },
  { path: 'upgrade', title: 'Upgrade to PRO', icon: 'unarchive', class: 'active-pro' },
];


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SideNavComponent implements OnInit {

  menuItems: any[];
  //    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  //  @ViewChild('sidenav') public sidenav: MatSidenavModule;

  constructor(
    private router: Router,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    console.log(this);
  }

  isMobileMenu() {
   /* 
    if ($(window).width() > 991) {
      return false;
    }
    return true;
    */
   return false;
  };
}
