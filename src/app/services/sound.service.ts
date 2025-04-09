import {Injectable, signal} from '@angular/core';
import {Sound} from "../models/sound.model";

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  private readonly sounds = signal<Sound[]>([
    {
      id: 1,
      name: 'Rain Sound',
      filename: 'rain.mp3',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
    {
      id: 2,
      name: 'Forest Ambience',
      filename: 'forest.mp3',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    },
    {
      id: 3,
      name: 'Waves',
      filename: 'waves.mp3',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    },
  ]);

  get allSounds() {
    return this.sounds.asReadonly();
  }
}
