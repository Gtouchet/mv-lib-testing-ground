import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { BaseExampleComponent } from '../../base-example.component';
import { MvLibSwitchLiteComponent, MvLibSwitchLiteEffects, MvLibSwitchLiteSettings, MvLibSwitchLiteStyles } from 'mv-lib';
import { StylesService } from '../../../../styles/styles.service';
import { INPUTS } from '../../../shared/inputs/inputs.export';

@Component({
  selector: 'app-switch-lite-example',
  imports: [
    MvLibSwitchLiteComponent,
    INPUTS,
  ],
  templateUrl: './switch-lite-example.component.html',
  styleUrls: [
    './switch-lite-example.component.scss',
    '../../testing-ground.scss',
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
      cursorSizePx: 24,

      trackColorOn: this.appStyles.var('switch-lite-track-color-on'),
      trackColorOff: this.appStyles.var('switch-lite-track-color-off'),

      cursorIconOn: this.appStyles.var('switch-lite-cursor-icon-on'),
      cursorColorOn: this.appStyles.var('switch-lite-cursor-color-on'),
      cursorIconColorOn: this.appStyles.var('switch-lite-cursor-icon-on-color'),

      cursorIconOff: this.appStyles.var('switch-lite-cursor-icon-off'),
      cursorColorOff: this.appStyles.var('switch-lite-cursor-color-off'),
      cursorIconColorOff: this.appStyles.var('switch-lite-cursor-icon-off-color'),
    });
    this.effects = signal<Partial<MvLibSwitchLiteEffects>>({
      idle: ['shadow'],
      hover: ['enlarge-cursor'],
      click: ['ripple'],
    });
    this.settings = signal<Partial<MvLibSwitchLiteSettings>>({
      
    });
  }

  protected initForm() {
    
  }
}

