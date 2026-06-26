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
  
  protected switch1_active = signal(false);
  protected switch2_active = signal(false);
  protected switch3_active = signal(false);

  protected disabled = signal(false);
  protected log = signal('Click on a button to see the button\'s settings');
  protected logColor = signal('black');

  protected setLog(event: MvLibSwitchClickEvent) {
    this.log.set(`${new Date().toLocaleTimeString()} - Button settings ${JSON.stringify(event.settings)}`);
    this.logColor.set(event.settings.onColor ?? 'black');
  }
}
