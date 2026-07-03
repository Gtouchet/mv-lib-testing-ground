import { BaseExampleComponent } from '../../base-example.component';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MvLibButtonClassicComponent, MvLibButtonClassicEffects, MvLibButtonClassicSettings, MvLibButtonClassicStyles } from 'mv-lib';
import { StylesService } from '../../../../styles/styles.service';

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

  protected appStyles = inject(StylesService);

  constructor() {
    super();
    this.logProperties.set(['disabled', 'styles', 'effects', 'settings']);
    this.styles = signal<Partial<MvLibButtonClassicStyles>>({
      widthPx: 80,
      heightPx: 40,
      color: this.appStyles.var('button-primary'),
      textColor: this.appStyles.var('button-primary-text'),
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
