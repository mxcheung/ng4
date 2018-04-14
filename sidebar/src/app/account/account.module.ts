import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { RegisterComponent } from './register/register.component';
import { AccountRoutingModule } from './account-routing.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {SharedModule} from '../shared/index';
import {MaterialModule} from '../shared/index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule
  ],
  declarations: [RegisterComponent, ForgotPasswordComponent]
})
export class AccountModule { }
