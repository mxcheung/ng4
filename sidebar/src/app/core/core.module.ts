import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {throwIfAlreadyLoaded} from './module-import-guard';
import {LoggerService} from './logger.service';

import {SharedModule} from '../shared/modules/shared.module';
import {RouterModule} from '@angular/router';
import {Error404Component} from './error404/error-404.component';
import {ProgressBarService} from './progress-bar.service';
import {SampleModule} from 'angular-example-library';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    SampleModule
  ],
  exports: [
  ],
  declarations: [
    Error404Component
  ],
  providers: [
    LoggerService,
    ProgressBarService
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
