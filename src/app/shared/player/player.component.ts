import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Artist } from 'src/models/artist_model';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'custom-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  public artist: Artist;

  @ViewChild('player') audioPlayer?: any;

  public playInterval: any;
  public totalTimeString: string = '0:00';
  public currentTimeString: string = '0:00';

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
      this.totalTimeString = this.setMinuteAndSecondFormat(this.audioPlayer.duration);
      this.audioPlayer.play()
    }, 100)
  }

  play(): void {
    this.audioPlayer?.play();
    this.startUpdateInterval();
  }

  pause(){
    this.audioPlayer?.pause();
    clearInterval(this.playInterval);
    this.playInterval = null;
  }

  startUpdateInterval(){
    if (!this.playInterval) {
      this.playInterval = this.playInterval = setInterval(() => {
        console.log(this.audioPlayer.currentTime)
        this.currentTimeString = this.setMinuteAndSecondFormat(this.audioPlayer.currentTime);
      }, 500)
    }
  }

  setMinuteAndSecondFormat(seconds: number): string {
    let minutes = Math.floor(seconds / 60);
    let secondsFormat = (Math.floor(seconds % 60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    return `${minutes}:${secondsFormat}`;
  }



}
