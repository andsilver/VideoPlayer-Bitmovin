import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PLAYER_COMPONENTS } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: PLAYER_COMPONENTS,
  exports : PLAYER_COMPONENTS
})
export class PlayerModule { }
