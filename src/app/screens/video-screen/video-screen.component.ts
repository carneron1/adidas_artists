import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { Artist } from 'src/models/artist_model';

@Component({
  selector: 'app-video-screen',
  templateUrl: './video-screen.component.html',
  styleUrls: ['./video-screen.component.scss']
})
export class VideoScreenComponent implements OnInit {
  
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
