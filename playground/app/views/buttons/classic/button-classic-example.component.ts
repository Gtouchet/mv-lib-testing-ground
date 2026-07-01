import { BaseExampleComponent } from '../../base-example.component';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MvLibButtonClassicComponent, MvLibButtonClassicEffects, MvLibButtonClassicSettings, MvLibButtonClassicStyles } from 'mv-lib';

@Component({
  selector: 'app-button-classic-example',
  imports: [MvLibButtonClassicComponent],
  templateUrl: './button-classic-example.component.html',
  styleUrls: [
    './button-classic-example.component.scss',
    '../../playground.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ButtonClassicExampleComponent extends BaseExampleComponent<
  MvLibButtonClassicStyles,
  MvLibButtonClassicEffects,
  MvLibButtonClassicSettings
> {

  constructor() {
    super();
    this.logProperties.set(['disabled', 'styles', 'effects', 'settings']);
    this.styles = signal<Partial<MvLibButtonClassicStyles>>({
      widthPx: 80,
      heightPx: 40,
      color: 'dodgerblue',
      textColor: 'white',
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
