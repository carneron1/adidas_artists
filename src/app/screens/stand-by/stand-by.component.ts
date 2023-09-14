import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-stand-by',
  templateUrl: './stand-by.component.html',
  styleUrls: ['./stand-by.component.scss']
})
export class StandByComponent {

  constructor(
    private router: Router,
    private stateService: StateService
  ){}

  navigate(artist: string) {
    if (artist == 'rozas'){
      this.stateService.artist = {
        name: 'rozas',
        image: 'rozas.jpeg',
        audio: 'rozas.mp3',
        video: 'rozas',
        songName: 'Demasiao'
      }
    }
    if (artist == 'dandara'){
      this.stateService.artist = {
        name: 'dandara',
        image: 'dandara.jpg',
        audio: 'dandara.mp3',
        video: 'dandara',
        songName: 'Feelings'
      }
    }
    if (artist == 'clavijo'){
      this.stateService.artist = {
        name: 'clavijo',
        image: 'clavijo.jpg',
        audio: 'clavijo.mp3',
        video: 'clavijo',
        songName: 'Cariño'
      }
    }
    this.router.navigate(['artist'])
  }

}
