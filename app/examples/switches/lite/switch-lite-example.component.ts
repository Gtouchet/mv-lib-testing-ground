import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { BaseExampleComponent } from '../../base-example.component';
import { MvLibSwitchLiteComponent } from 'mv-lib';
import { INPUTS } from '../../../inputs/_inputs.export';

@Component({
  selector: 'app-switch-lite-example',
  imports: [
    MvLibSwitchLiteComponent,
    INPUTS,
  ],
  templateUrl: './switch-lite-example.component.html',
  styleUrl: '../../example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SwitchLiteExampleComponent extends BaseExampleComponent {

  constructor() {
    super();
    // this.logProperties.set(['style', 'effects', 'settings', 'active', 'disabled']);
    // this.styles = signal({
      // track: {
      //   dimensions: {
      //     width: '48px',
      //     height: '12px',
      //   },
      // },
      // cursorSizePx: 24,

      // trackColorOn: this.appStyles.var('switch-lite-track-color-on'),
      // trackColorOff: this.appStyles.var('switch-lite-track-color-off'),

      // cursorIconOn: this.appStyles.var('switch-lite-cursor-icon-on'),
      // cursorColorOn: this.appStyles.var('switch-lite-cursor-color-on'),
      // cursorIconColorOn: this.appStyles.var('switch-lite-cursor-icon-on-color'),

      // cursorIconOff: this.appStyles.var('switch-lite-cursor-icon-off'),
      // cursorColorOff: this.appStyles.var('switch-lite-cursor-color-off'),
      // cursorIconColorOff: this.appStyles.var('switch-lite-cursor-icon-off-color'),
    // });
    // this.effects = signal({
      
    // });
    // this.settings = signal({
      
    // });
  }

  protected override refreshLog() {
    var result = ``;
    ['style', 'effects', 'settings', 'disabled'].forEach(property => {
      result += `    [${property}]=\"${this.prettify((this as any)[property])}\",\n`;
    });
    this.log.set(result);
  }
}

