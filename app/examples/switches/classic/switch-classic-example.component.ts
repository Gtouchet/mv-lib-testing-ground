import { ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { BaseExampleComponent } from '../../base-example.component';
import { MvLibSwitchClassicAnimations, MvLibSwitchClassicComponent, MvLibSwitchClassicEffects, MvLibSwitchClassicSettings, MvLibSwitchClassicStyle } from 'mv-lib';
import { INPUTS } from '../../../inputs/_inputs.export';

@Component({
  selector: 'app-switch-classic-example',
  imports: [
    MvLibSwitchClassicComponent,
    INPUTS,
  ],
  templateUrl: './switch-classic-example.component.html',
  styleUrl: '../../example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SwitchClassicExampleComponent extends BaseExampleComponent {

  protected switch = viewChild.required<MvLibSwitchClassicComponent>('mvLibSwitchClassic');
  
  protected style = signal<Partial<MvLibSwitchClassicStyle>>({
    track: {
        colorOn: this.appStyles.var('switch-classic-track-color-on'),
        colorOff: this.appStyles.var('switch-classic-track-color-off'),
      },
      cursor: {
        colorOn: this.appStyles.var('switch-classic-cursor-color-on'),
        colorOff: this.appStyles.var('switch-classic-cursor-color-off'),
        iconOn: this.appStyles.var('switch-classic-cursor-icon-on'),
        iconOff: this.appStyles.var('switch-classic-cursor-icon-off'),
        iconColorOn: this.appStyles.var('switch-classic-cursor-icon-on-color'),
        iconColorOff: this.appStyles.var('switch-classic-cursor-icon-off-color'),
      },
  });

  protected effects = signal<Partial<MvLibSwitchClassicEffects>>({
    
  });

  protected animations = signal<Partial<MvLibSwitchClassicAnimations>>({

  });

  protected settings = signal<Partial<MvLibSwitchClassicSettings>>({

  });

  protected active = signal(false);

  ngAfterViewInit() {
    this.logProperties = [
      { property: 'style', value: this.switch().computedStyles },
      { property: 'effects', value: this.switch().computedEffects },
      { property: 'settings', value: this.switch().computedSettings },
      { property: 'active', value: this.active },
      { property: 'disabled', value: this.disabled },
    ];
    this.refreshLog();
  }
}