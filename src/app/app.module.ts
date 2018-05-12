import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PlayerModule } from './player/player.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
