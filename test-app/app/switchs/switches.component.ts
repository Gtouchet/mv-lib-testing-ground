import { Component, inject, signal } from '@angular/core';
import { MvLibSwitchClickEvent, MvLibSwitchComponent } from '../../../mv-lib/components/mv-lib-switch/mv-lib-switch.component';
import { StylesService } from '../../styles/styles.service';

@Component({
  selector: 'app-switches',
  imports: [
    MvLibSwitchComponent,
  ],
  templateUrl: './switches.component.html',
  styleUrl: './switches.component.scss'
})
export class SwitchesComponent {

  protected styles = inject(StylesService);
  
  protected switchesStates = signal<boolean[]>([
    false, false, false, false, false, false, false, false, false,
  ]);

  protected disabled = signal(false);
  protected log = signal('Click on a switch to see the switch\'s settings');

  protected setLog(event: MvLibSwitchClickEvent) {
    this.log.set(`Switch clicked at ${new Date().toLocaleTimeString()}\n${JSON.stringify(event.settings, null, 4)}`);
  }
}
