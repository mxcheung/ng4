import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BallComponent } from './ball.component';
import { BallService } from './ball.service';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BallComponent
  ],
  providers: [
    BallService
  ],
  declarations: [BallComponent]
})
export class BallModule { }
