import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MvLibSwitchClassicComponent, MvLibSwitchClassicEffects, MvLibSwitchClassicSettings } from 'mv-lib';
import { BaseExampleComponent } from '../../base-example.component';

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
      hover: [],
      click: [],
    });
  }

  protected override refreshLog() {
    this.log.set(`
Last interacted at ${this.lastInteractionTime()}\n
[disabled]=\"${this.disabled()}\",
[active]=\"${this.active()}\",
[settings]=\"${this.prettify(this.settings())}\",
[effects]=\"${this.prettify(this.effects())}\"
    `);
  }
}
