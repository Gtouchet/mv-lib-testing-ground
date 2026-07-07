import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { BaseExampleComponent } from '../../base-example.component';
import { MvLibSwitchClassicComponent, MvLibSwitchClassicEffects, MvLibSwitchClassicSettings, MvLibSwitchClassicStyles } from 'mv-lib';
import { StylesService } from '../../../../styles/styles.service';

@Component({
  selector: 'app-switch-classic-example',
  imports: [MvLibSwitchClassicComponent],
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
  MvLibSwitchClassicSettings
> {

  protected appStyles = inject(StylesService);
  
  protected active = signal(true);

  constructor() {
    super();
    this.logProperties.set(['disabled', 'active', 'styles', 'effects', 'settings']);
    this.styles = signal<Partial<MvLibSwitchClassicStyles>>({
      widthPx: 64,
      heightPx: 32,
      trackColorOn: this.appStyles.var('switch-classic-track-color-on'),
      trackColorOff: this.appStyles.var('switch-classic-track-color-off'),
      cursorColorOn: this.appStyles.var('switch-classic-cursor-color-on'),
      cursorColorOff: this.appStyles.var('switch-classic-cursor-color-off'),
      cursorIconOn: this.appStyles.var('switch-classic-cursor-icon-on'),
      cursorIconOff: this.appStyles.var('switch-classic-cursor-icon-off'),
      cursorIconColorOn: this.appStyles.var('switch-classic-cursor-icon-on-color'),
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

  protected initForm() {
    
  }
}

