import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BallModule } from './ball/ball.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BallModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
