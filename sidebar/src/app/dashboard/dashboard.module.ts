import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/index'
import { AccountModule } from '../account';
import { SharedModule } from '../shared';

import { DASHBOARD_ROUTES } from './dashboard.routes';
import { DashboardOverviewComponent } from './sections/dashboard-overview/dashboard-overview.component';
import { TableListComponent } from './sections/table-list/table-list.component';
import { MapsComponent } from './sections/maps/maps.component';


/*
    RegisterComponent,
    ForgotPasswordComponent

*/

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SharedModule,
    LayoutModule,
    AccountModule
  ],
  declarations: [ 
     DashboardOverviewComponent,
     TableListComponent,
     MapsComponent
    ],
  providers: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class DashboardModule { }
