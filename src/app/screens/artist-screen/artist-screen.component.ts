import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-artist-screen',
  templateUrl: './artist-screen.component.html',
  styleUrls: ['./artist-screen.component.scss']
})
export class ArtistScreenComponent implements OnInit{

  public containerStyle: any;
  public nameImg = '';

  constructor(
    private stateService: StateService
  ){}

  ngOnInit(): void {
    this.containerStyle = {
      'background-image': `url(/assets/img/${this.stateService.artist.image})`
    }
    this.nameImg = `/assets/img/${this.stateService.artist.name}-name.png`
  }


}
