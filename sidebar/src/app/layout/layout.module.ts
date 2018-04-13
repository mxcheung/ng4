import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/modules/shared.module';
import {RouterModule} from '@angular/router';
import { CoreModule } from '../core/index';
import {ProgressBarService} from '../core/progress-bar.service';
import { SampleModule } from 'angular-example-library';

import {SearchBarComponent} from './search-bar/search-bar.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    TranslateModule,
    SampleModule
  ],
  exports: [
    SearchBarComponent,
    NavComponent,
    FooterComponent
  ],
  providers: [
    ProgressBarService

  ],
  declarations: [
    SearchBarComponent,
    NavComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
