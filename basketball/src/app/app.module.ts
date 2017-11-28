import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { BootyModule } from './booty/booty.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, AppBootstrapModule, BootyModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
