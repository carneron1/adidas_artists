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
        audio: 'rozas.mp4',
        video: 'rozas-v.mp4',
        songName: 'Demasiao'
      }
    }
    if (artist == 'dandara'){
      this.stateService.artist = {
        name: 'dandara',
        image: 'dandara.jpg',
        audio: 'dandara.mp4',
        video: 'dandara-v.mp4',
        songName: 'Feelings'
      }
    }
    if (artist == 'clavijo'){
      this.stateService.artist = {
        name: 'clavijo',
        image: 'clavijo.jpg',
        audio: 'clavijo.mp4',
        video: 'clavijo-v.mp4',
        songName: 'Cariño'
      }
    }
    this.router.navigate(['artist'])
  }

}
