import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { BaseExampleComponent } from '../../base-example.component';
import { MvLibSwitchClassicComponent, MvLibSwitchClassicEffects, MvLibSwitchClassicSettings, MvLibSwitchClassicStyles } from 'mv-lib';

@Component({
  selector: 'app-switch-classic-example',
  imports: [MvLibSwitchClassicComponent],
  templateUrl: './switch-classic-example.component.html',
  styleUrls: [
    './switch-classic-example.component.scss',
    '../../playground.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SwitchClassicExampleComponent extends BaseExampleComponent<
  MvLibSwitchClassicStyles,
  MvLibSwitchClassicEffects,
  MvLibSwitchClassicSettings
> {

  protected active = signal(true);

  constructor() {
    super();
    this.logProperties.set(['disabled', 'active', 'styles', 'effects', 'settings']);
    this.styles = signal<Partial<MvLibSwitchClassicStyles>>({
      widthPx: 64,
      heightPx: 32,
      offColor: 'gray',
      onColor: 'dodgerblue',
      sliderOffColor: 'darkgray',
      sliderOnColor: 'white',
    });
    this.effects = signal<Partial<MvLibSwitchClassicEffects>>({
      idle: ['shadow'],
      hover: ['enlarge-slider'],
      click: ['ripple'],
    });
    this.settings = signal<Partial<MvLibSwitchClassicSettings>>({
      
    });
  }
}
