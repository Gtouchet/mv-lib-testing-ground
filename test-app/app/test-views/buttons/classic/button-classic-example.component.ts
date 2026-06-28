import { BaseExampleComponent } from '../../base-example.component';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MvLibButtonClassicComponent, MvLibButtonClassicEffects, MvLibButtonClassicSettings } from 'mv-lib';

@Component({
  selector: 'app-button-classic-example',
  imports: [MvLibButtonClassicComponent],
  templateUrl: './button-classic-example.component.html',
  styleUrl: './button-classic-example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ButtonClassicExampleComponent extends BaseExampleComponent<
  MvLibButtonClassicSettings,
  MvLibButtonClassicEffects
> {

  constructor() {
    super();
    this.settings = signal<Partial<MvLibButtonClassicSettings>>({
      widthPx: 100,
      heightPx: 40,
      backgroundColor: 'dodgerblue',
      textColor: 'white',
    });
    this.effects = signal<Partial<MvLibButtonClassicEffects>>({
      idle: ['shadow'],
      hover: ['darken'],
      click: ['push'],
    });
  }
}
