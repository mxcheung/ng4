import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RegisterComponent} from './../account/index';
import {ForgotPasswordComponent} from './../account/index';

import { DashboardOverviewComponent } from './sections/dashboard-overview/dashboard-overview.component';
import { DashboardComponent } from './sections/dashboard/dashboard.component';
import { TableListComponent } from './sections/table-list/table-list.component';
import { IconsComponent } from './sections/icons/icons.component';
import { MapsComponent } from './sections/maps/maps.component';
import { NotificationsComponent } from './sections/notifications/notifications.component';
import { HeroTopComponent } from './../heroes/hero-top/hero-top.component';
import { TypographyComponent } from './sections/typography/typography.component';

/*
{
    path: 'account',
    children: [
      {path: 'register', component: RegisterComponent},
      {path: 'forgot/password', component: ForgotPasswordComponent}
    ]
  }
      path: 'overview',  component: DashboardOverviewComponent

*/
/*
export const DASHBOARD_ROUTES: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', component: HeroTopComponent },
  { path: 'table-list', component: TableListComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'heroes', loadChildren: 'app/heroes/heroes.module#HeroesModule' }
];
*/