import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandByComponent } from './stand-by/stand-by.component';
import { PlayerScreenComponent } from './player-screen/player-screen.component';
import { ArtistScreenComponent } from './artist-screen/artist-screen.component';
import { SelectScreenComponent } from './select-screen/select-screen.component';

const routes: Routes = [
  {path: '', component: StandByComponent},
  {path: 'player', component: PlayerScreenComponent},
  {path: 'artist', component: ArtistScreenComponent},
  {path: 'select-screen', component: SelectScreenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreensRoutingModule { }
