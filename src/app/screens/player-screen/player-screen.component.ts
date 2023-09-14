import { Component, Input, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { Artist } from 'src/models/artist_model';

@Component({
  selector: 'app-player-screen',
  templateUrl: './player-screen.component.html',
  styleUrls: ['./player-screen.component.scss']
})
export class PlayerScreenComponent implements OnInit{
  
  public artist: Artist;
  public containerStyle: any;
  public nameImg = '';

  constructor(
    private stateService: StateService
  ){
    this.artist = stateService.artist
  }
  ngOnInit(): void {
    this.containerStyle = {
      'background-image': `url(/assets/img/${this.artist.image})`,
      'background-size': 'cover',
      'background-position': 'center',
    }
    this.nameImg = `/assets/img/${this.stateService.artist.name}-name.png`

  }

}
