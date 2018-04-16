import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardOverviewComponent } from './sections/dashboard-overview/dashboard-overview.component';
import { DashboardComponent } from './sections/dashboard/dashboard.component';
import { UserProfileComponent } from './sections/user-profile/user-profile.component';
import { TableListComponent } from './sections/table-list/table-list.component';
import { IconsComponent } from './sections/icons/icons.component';
import { MapsComponent } from './sections/maps/maps.component';
import { TypographyComponent } from './sections/typography/typography.component';
import { NotificationsComponent } from './sections/notifications/notifications.component';
import { HeroTopComponent } from './../heroes/hero-top/hero-top.component';

export const DASHBOARD_ROUTES: Routes = [
  { path: '', redirectTo: 'hero-top', pathMatch: 'full' },
  { path: 'hero-top', component: HeroTopComponent },
  { path: 'dashboard2', component: DashboardComponent },
  { path: 'user-profile', component:   UserProfileComponent},
  { path: 'table-list', component: TableListComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'heroes', loadChildren: 'app/heroes/heroes.module#HeroesModule' }
];

@NgModule({
  imports: [
    RouterModule.forChild(DASHBOARD_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class DashboardRoutingModule {
}
