import { BaseExampleComponent } from '../../base-example.component';
import { ChangeDetectionStrategy, Component, contentChild, signal } from '@angular/core';
import { MvLibButtonClassicComponent, MvLibButtonClassicEffects, MvLibButtonClassicEffectsStyles, MvLibButtonClassicSettings, MvLibButtonClassicStyles } from 'mv-lib';
import { INPUTS } from '../../../inputs/inputs.export';

@Component({
  selector: 'app-button-classic-example',
  imports: [
    MvLibButtonClassicComponent,
    INPUTS,
  ],
  templateUrl: './button-classic-example.component.html',
  styleUrls: [
    './button-classic-example.component.scss',
    '../../example.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ButtonClassicExampleComponent extends BaseExampleComponent<
  MvLibButtonClassicStyles,
  MvLibButtonClassicEffects,
  MvLibButtonClassicEffectsStyles,
  MvLibButtonClassicSettings
> {
  override mvLibComponent = contentChild<MvLibButtonClassicComponent>('mvLibComponent');

  constructor() {
    super();
    this.styles = signal<Partial<MvLibButtonClassicStyles>>({
      widthPx: 80,
      heightPx: 40,
      backgroundColor: this.appStyles.var('button-classic-background-color'),
      textColor: this.appStyles.var('button-classic-text-color'),
    });
    this.effects = signal<Partial<MvLibButtonClassicEffects>>({
      idle: ['shadow'],
      hover: ['darken'],
      click: ['push'],
    });
    this.settings = signal<Partial<MvLibButtonClassicSettings>>({

    });
  }
}
