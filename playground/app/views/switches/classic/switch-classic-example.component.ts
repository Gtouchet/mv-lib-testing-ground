import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { BaseExampleComponent } from '../../base-example.component';
import { MvLibSwitchClassicComponent, MvLibSwitchClassicEffects, MvLibSwitchClassicSettings } from 'mv-lib';

@Component({
  selector: 'app-switch-classic-example',
  imports: [MvLibSwitchClassicComponent],
  templateUrl: './switch-classic-example.component.html',
  styleUrl: './switch-classic-example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SwitchClassicExampleComponent extends BaseExampleComponent<
  MvLibSwitchClassicSettings,
  MvLibSwitchClassicEffects
> {

  protected active = signal(true);

  constructor() {
    super();
    this.logProperties.set(['disabled', 'active', 'settings', 'effects']);
    this.settings = signal<Partial<MvLibSwitchClassicSettings>>({
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
  }
}
