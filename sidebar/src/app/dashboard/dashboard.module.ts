import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/index'
import { AccountModule } from '../account';
import { SharedModule } from '../shared';

import { DASHBOARD_ROUTES } from './dashboard-routing.module';
import { DashboardOverviewComponent } from './sections/dashboard-overview/dashboard-overview.component';
import { TableListComponent } from './sections/table-list/table-list.component';
import { TypographyComponent } from './sections/typography/typography.component';
import { IconsComponent } from './sections/icons/icons.component';
import { MapsComponent } from './sections/maps/maps.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeroTopComponent } from './../heroes/hero-top/hero-top.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SharedModule,
    LayoutModule,
    DashboardRoutingModule,
    AccountModule
  ],
  declarations: [ 
     DashboardOverviewComponent,
     TableListComponent,
     TypographyComponent,
     IconsComponent,
     MapsComponent,
     HeroTopComponent
    ],
  providers: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class DashboardModule { }
