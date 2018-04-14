import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RegisterComponent} from './../account/index';
import {ForgotPasswordComponent} from './../account/index';

import { DashboardOverviewComponent } from './sections/dashboard-overview/dashboard-overview.component';
import { HeroTopComponent } from './../heroes/hero-top/hero-top.component';

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
export const DASHBOARD_ROUTES: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  {
    path: 'overview',  component: HeroTopComponent
  },
  {
    path: 'heroes', 
    children: [
      {
        path: '',
        component: HeroTopComponent
      },
      {
        path: ':companyId/:extUniqueKey/:segmentCd/edit',
        component: HeroTopComponent
      },
      {
        path: 'products',
        component: HeroTopComponent,
      }
    ]
   
  }
  
];
