import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { StylesService } from '../../styles/styles.service';
import { MvLibSwitchClassicClickEvent, MvLibSwitchClassicComponent } from 'mv-lib';

@Component({
  selector: 'app-switches',
  imports: [MvLibSwitchClassicComponent],
  templateUrl: './switches.component.html',
  styleUrl: './switches.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SwitchesComponent {

  protected styles = inject(StylesService);
  
  protected switchesStates = signal<boolean[]>([
    false, false, false, false, false, false, false, false, false,
  ]);

  protected disabled = signal(false);
  protected log = signal('Click on a switch to see the switch\'s settings');

  protected setLog(event: MvLibSwitchClassicClickEvent) {
    this.log.set(`Switch clicked at ${new Date().toLocaleTimeString()}\n${JSON.stringify({}, null, 4)}`);
  }
}
