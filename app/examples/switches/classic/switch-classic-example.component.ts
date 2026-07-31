import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { BaseExampleComponent } from '../../base-example.component';
import { MvLibSwitchClassicComponent } from 'mv-lib';
import { INPUTS } from '../../../inputs/_inputs.export';

@Component({
  selector: 'app-switch-classic-example',
  imports: [
    MvLibSwitchClassicComponent,
    INPUTS,
  ],
  templateUrl: './switch-classic-example.component.html',
  styleUrl: '../../example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SwitchClassicExampleComponent extends BaseExampleComponent<MvLibSwitchClassicComponent> {
  
  constructor() {
    super();
    this.logProperties.set(['styles', 'effects', 'settings', 'active', 'disabled']);
    this.styles = signal({
      track: {
        colorOn: this.appStyles.var('switch-classic-track-color-on'),
        colorOff: this.appStyles.var('switch-classic-track-color-off'),
      },
      cursor: {
        colorOn: this.appStyles.var('switch-classic-cursor-color-on'),
        colorOff: this.appStyles.var('switch-classic-cursor-color-off'),
        iconOn: this.appStyles.var('switch-classic-cursor-icon-on'),
        iconOff: this.appStyles.var('switch-classic-cursor-icon-off'),
        iconColorOn: this.appStyles.var('switch-classic-cursor-icon-on-color'),
        iconColorOff: this.appStyles.var('switch-classic-cursor-icon-off-color'),
      },
    });
    this.effects = signal({

    });
    this.settings = signal({
      
    });
  }
}

