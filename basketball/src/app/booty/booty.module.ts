import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootyComponent } from './booty.component';
import { AppBootstrapModule } from '../app-bootstrap/app-bootstrap.module';


@NgModule({
  imports: [
    CommonModule,
    AppBootstrapModule    
  ],
  exports: [
    BootyComponent
  ],
  declarations: [BootyComponent]
})
export class BootyModule { }
