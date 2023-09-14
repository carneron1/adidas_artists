import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreensRoutingModule } from './screens-routing.module';
import { StandByComponent } from './stand-by/stand-by.component';
import { SharedModule } from '../shared/shared.module';
import { PlayerScreenComponent } from './player-screen/player-screen.component';
import { ArtistScreenComponent } from './artist-screen/artist-screen.component';
import { SelectScreenComponent } from './select-screen/select-screen.component';


@NgModule({
  declarations: [
    StandByComponent,
    PlayerScreenComponent,
    ArtistScreenComponent,
    SelectScreenComponent
  ],
  imports: [
    CommonModule,
    ScreensRoutingModule,
    SharedModule
  ]
})
export class ScreensModule { }
