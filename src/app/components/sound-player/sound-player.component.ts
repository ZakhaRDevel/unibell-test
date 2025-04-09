import { CommonModule, NgIf } from '@angular/common'
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild, effect, signal } from '@angular/core'
import { SoundService } from '../../services/sound.service'

@Component({
  selector: 'app-sound-player',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './sound-player.component.html',
  styleUrls: ['./sound-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SoundPlayerComponent implements AfterViewInit {
  @ViewChild('audioPlayer') private readonly audioPlayer!: ElementRef<HTMLAudioElement>;

  readonly selectedSound = this.soundService.selectedSound$;
  private readonly isInitialized = signal(false);
  readonly hasError = signal(false);

  constructor(private readonly soundService: SoundService) {
    effect(() => {
      if (!this.isInitialized() || !this.audioPlayer) {
        return;
      }

      const sound = this.selectedSound();
      if (sound) {
        this.hasError.set(false);
        this.audioPlayer.nativeElement.load();
      } else {
        this.stopPlayback();
      }
    });
  }

  ngAfterViewInit(): void {
    this.isInitialized.set(true);
    const sound = this.selectedSound();
    if (sound && this.audioPlayer) {
      this.audioPlayer.nativeElement.load();
    }
  }

  onAudioLoaded(): void {
    if (this.audioPlayer && this.selectedSound()) {
      this.audioPlayer.nativeElement.play().catch(() => {
        this.hasError.set(true);
      });
    }
  }

  onAudioError(): void {
    this.hasError.set(true);
    this.stopPlayback();
  }

  private stopPlayback(): void {
    if (this.audioPlayer) {
      this.audioPlayer.nativeElement.pause();
      this.audioPlayer.nativeElement.currentTime = 0;
    }
  }
}
