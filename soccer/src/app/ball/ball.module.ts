import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BallComponent } from './ball.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BallComponent
  ],
  declarations: [BallComponent]
})
export class BallModule { }
