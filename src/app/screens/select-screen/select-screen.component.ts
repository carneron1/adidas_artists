import { Component, OnInit, ViewChild } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { Artist } from 'src/models/artist_model';

@Component({
  selector: 'app-select-screen',
  templateUrl: './select-screen.component.html',
  styleUrls: ['./select-screen.component.scss']
})
export class SelectScreenComponent implements OnInit{

  @ViewChild('player') audioPlayer?: any;
  public artist: Artist;

  constructor(
    private stateService: StateService
  ){
    this.artist = this.stateService.artist
  }
  
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.audioPlayer = document.getElementById('player') as HTMLAudioElement
    }, 100)
  }



  play(): void {
    this.audioPlayer?.play();
  }


}
