import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { BaseExampleComponent } from '../../base-example.component';
import { MvLibSwitchLiteComponent, MvLibSwitchLiteEffects, MvLibSwitchLiteSettings, MvLibSwitchLiteStyles } from 'mv-lib';
import { StylesService } from '../../../../styles/styles.service';

@Component({
  selector: 'app-switch-lite-example',
  imports: [MvLibSwitchLiteComponent],
  templateUrl: './switch-lite-example.component.html',
  styleUrls: [
    './switch-lite-example.component.scss',
    '../../playground.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SwitchLiteExampleComponent extends BaseExampleComponent<
  MvLibSwitchLiteStyles,
  MvLibSwitchLiteEffects,
  MvLibSwitchLiteSettings
> {
  
  protected appStyles = inject(StylesService);

  protected active = signal(true);

  constructor() {
    super();
    this.logProperties.set(['disabled', 'active', 'styles', 'effects', 'settings']);
    this.styles = signal<Partial<MvLibSwitchLiteStyles>>({
      widthPx: 48,
      heightPx: 12,
      offColor: this.appStyles.var('switch-off'),
      onColor: this.appStyles.var('switch-on'),
      sliderSizePx: 24,
      sliderOffColor: this.appStyles.var('switch-slider-off'),
      sliderOnColor: this.appStyles.var('switch-slider-on'),
    });
    this.effects = signal<Partial<MvLibSwitchLiteEffects>>({
      idle: ['shadow'],
      hover: ['enlarge-slider'],
      click: ['ripple'],
    });
    this.settings = signal<Partial<MvLibSwitchLiteSettings>>({
      
    });
  }
}
