import { Injectable, signal } from '@angular/core'
import { Sound } from "../models/sound.model"

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  private readonly sounds = signal<readonly Sound[]>([
    {
      id: 1,
      name: 'Дождь',
      fileName: 'rain.mp3',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    },
    {
      id: 2,
      name: 'Ветер',
      fileName: 'wind.mp3',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
    },
    {
      id: 3,
      name: 'Гром',
      fileName: 'thunder.mp3',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
    }
  ] as const);

  private readonly selectedSound = signal<Sound | null>(null);

  readonly sounds$ = this.sounds;

  readonly selectedSound$ = this.selectedSound;

  selectSound(sound: Sound): void {
    if (this.selectedSound()?.id === sound.id) {
      this.selectedSound.set(null);
      return;
    }

    this.selectedSound.set(sound);
  }
}
