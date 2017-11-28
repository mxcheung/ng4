import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { AppBootstrapModule } from '../app-bootstrap/app-bootstrap.module';


@NgModule({
  imports: [
    CommonModule,
    AppBootstrapModule
  ],
  exports: [
    LayoutComponent
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
