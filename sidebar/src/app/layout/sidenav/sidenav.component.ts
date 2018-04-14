import { Component, OnInit, ViewChild, Input, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SideNavComponent implements OnInit {

  selected = '';
  name = '';

  items = [
    {text: 'Refresh'},
    {text: 'Settings'},
    {text: 'Help', disabled: true},
    {text: 'Sign Out'}
  ];

  iconItems = [
    {text: 'Redial', icon: 'dialpad'},
    {text: 'Check voicemail', icon: 'voicemail', disabled: true},
    {text: 'Disable alerts', icon: 'notifications_off'}
  ];
  //    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  //  @ViewChild('sidenav') public sidenav: MatSidenavModule;

  constructor(
    private router: Router,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    console.log(this);
  }

  // show() {
  //    this.sidenav;
  // }

  select(text: string) {
    this.selected = text;
    console.log(this.selected);
  }

}
