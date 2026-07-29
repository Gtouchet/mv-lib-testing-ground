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
    this.additionalLogProperties.set(['active']);
    this.styles = signal({
      widthPx: 64,
      heightPx: 32,

      trackColorOn: this.appStyles.var('switch-classic-track-color-on'),
      trackColorOff: this.appStyles.var('switch-classic-track-color-off'),

      cursorIconOn: this.appStyles.var('switch-classic-cursor-icon-on'),
      cursorColorOn: this.appStyles.var('switch-classic-cursor-color-on'),
      cursorIconColorOn: this.appStyles.var('switch-classic-cursor-icon-on-color'),

      cursorIconOff: this.appStyles.var('switch-classic-cursor-icon-off'),
      cursorColorOff: this.appStyles.var('switch-classic-cursor-color-off'),
      cursorIconColorOff: this.appStyles.var('switch-classic-cursor-icon-off-color'),
    });
    this.effects = signal({

    });
    this.settings = signal({
      
    });
  }
}

