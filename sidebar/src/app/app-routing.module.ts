import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HeroTopComponent} from './heroes/hero-top/hero-top.component';
import {MainComponent} from './layout/index';
import {AppConfig} from './config/app.config';
import {Error404Component} from './core/error404/error-404.component';
import { DASHBOARD_ROUTES } from './dashboard/index';
//{path: '', component: HeroTopComponent},
/*
  {path: AppConfig.routes.heroes, loadChildren: 'app/heroes/heroes.module#HeroesModule'
  } ,

*/ 
const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {
    path: 'dashboard',
    component: MainComponent,
    data: { authorities: [], pageTitle: 'Lonsec Data Portal' },
    children: DASHBOARD_ROUTES
  },
  {path: AppConfig.routes.heroes, loadChildren: 'app/heroes/heroes.module#HeroesModule'
  } ,
  {path: AppConfig.routes.account, loadChildren: 'app/account/account.module#AccountModule'
  },
  {path: AppConfig.routes.error404, component: Error404Component},

  // otherwise redirect to 404
  {path: '**', redirectTo: '/' + AppConfig.routes.error404}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
