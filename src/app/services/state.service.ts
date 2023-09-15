import { Injectable } from '@angular/core';
import { Artist } from 'src/models/artist_model';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public artist: Artist = {
    name: 'rozas',
    image: 'rozas.jpeg',
    audio: 'rozas.mp4',
    video: 'rozas-v.mp4',
    songName: 'Demasiao'

  }

  constructor() { }
}
