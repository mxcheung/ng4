import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RegisterComponent} from './register/register.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';

const accountRoutes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: RegisterComponent},
      {path: 'forgot/password', component: ForgotPasswordComponent}
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
