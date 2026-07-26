import { ChangeDetectionStrategy, Component, contentChild, signal } from '@angular/core';
import { BaseExampleComponent } from '../../base-example.component';
import { MvLibSwitchClassicComponent, MvLibSwitchClassicEffects, MvLibSwitchClassicEffectsStyles, MvLibSwitchClassicSettings, MvLibSwitchClassicStyles } from 'mv-lib';
import { INPUTS } from '../../../shared/inputs.export';

@Component({
  selector: 'app-switch-classic-example',
  imports: [
    MvLibSwitchClassicComponent,
    INPUTS,
  ],
  templateUrl: './switch-classic-example.component.html',
  styleUrls: [
    './switch-classic-example.component.scss',
    '../../testing-ground.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SwitchClassicExampleComponent extends BaseExampleComponent<
  MvLibSwitchClassicStyles,
  MvLibSwitchClassicEffects,
  MvLibSwitchClassicEffectsStyles,
  MvLibSwitchClassicSettings
> {
  override mvLibComponent = contentChild<MvLibSwitchClassicComponent>('mvLibComponent');
  
  constructor() {
    super();
    this.additionalLogProperties.set(['active']);
    this.styles = signal<Partial<MvLibSwitchClassicStyles>>({
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
    this.effects = signal<Partial<MvLibSwitchClassicEffects>>({
      idle: ['shadow'],
      hover: ['enlarge-cursor'],
      click: ['ripple'],
    });
    this.settings = signal<Partial<MvLibSwitchClassicSettings>>({
      
    });
  }
}

