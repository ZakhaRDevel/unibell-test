import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SoundPlayerComponent } from './components/sound-player/sound-player.component';
import { SoundTableComponent } from './components/sound-table/sound-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SoundTableComponent, SoundPlayerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
