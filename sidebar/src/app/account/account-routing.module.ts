import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RegisterComponent} from './register/register.component';

const accountRoutes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    children: [
      {path: '', component: RegisterComponent},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(accountRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AccountRoutingModule {
}
