import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { BaseExampleComponent } from '../../base-example.component';
import { MvLibSwitchLiteComponent } from 'mv-lib';
import { INPUTS } from '../../../inputs/inputs.export';

@Component({
  selector: 'app-switch-lite-example',
  imports: [
    MvLibSwitchLiteComponent,
    INPUTS,
  ],
  templateUrl: './switch-lite-example.component.html',
  styleUrls: [
    './switch-lite-example.component.scss',
    '../../example.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SwitchLiteExampleComponent extends BaseExampleComponent<MvLibSwitchLiteComponent> {

  constructor() {
    super();
    this.additionalLogProperties.set(['active']);
    this.styles = signal({
      widthPx: 48,
      heightPx: 12,
      cursorSizePx: 24,

      trackColorOn: this.appStyles.var('switch-lite-track-color-on'),
      trackColorOff: this.appStyles.var('switch-lite-track-color-off'),

      cursorIconOn: this.appStyles.var('switch-lite-cursor-icon-on'),
      cursorColorOn: this.appStyles.var('switch-lite-cursor-color-on'),
      cursorIconColorOn: this.appStyles.var('switch-lite-cursor-icon-on-color'),

      cursorIconOff: this.appStyles.var('switch-lite-cursor-icon-off'),
      cursorColorOff: this.appStyles.var('switch-lite-cursor-color-off'),
      cursorIconColorOff: this.appStyles.var('switch-lite-cursor-icon-off-color'),
    });
    this.effects = signal({
      
    });
    this.settings = signal({
      
    });
  }
}

