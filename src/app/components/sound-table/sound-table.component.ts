import { ChangeDetectionStrategy, Component, computed } from '@angular/core'
import { MatTableModule } from '@angular/material/table'
import { Sound } from '../../models/sound.model'
import { SoundService } from '../../services/sound.service'

@Component({
  selector: 'app-sound-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './sound-table.component.html',
  styleUrls: ['./sound-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SoundTableComponent {
  readonly displayedColumns: readonly string[] = ['id', 'name', 'fileName'] as const;

  readonly sounds = computed(() => this.soundService.sounds$());
  readonly selectedSound = computed(() => this.soundService.selectedSound$());

  isSelectedSound(sound: Sound): boolean {
    const selected = this.selectedSound();
    return selected?.id === sound.id;
  }

  constructor(private readonly soundService: SoundService) {}

  selectSound(sound: Sound): void {
    this.soundService.selectSound(sound);
  }
}
