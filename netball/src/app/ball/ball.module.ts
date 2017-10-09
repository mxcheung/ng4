import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BallComponent } from './ball.component';
import { BallService } from './ball.service';
@NgModule({
  imports: [
    CommonModule,
    HttpModule
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
