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
  
  protected style = signal<Partial<MvLibSwitchClassicStyle>>({});

  protected effects = signal<Partial<MvLibSwitchClassicEffects>>({
    track: {
      classes: [
        this.mvLibEffects.idle.shadow.class,
      ],
    },
    cursor: {
      classes: [
        this.mvLibEffects.hover.resize.class,
      ],
    },
  });

  protected animations = signal<Partial<MvLibSwitchClassicAnimations>>({

  });

  protected settings = signal<Partial<MvLibSwitchClassicSettings>>({

  });

  protected active = signal(false);

  ngAfterViewInit() {
    this.selectedPartStyle.set('track');
    this.selectedPartEffects.set('track');
    this.logProperties = [
      { property: 'inputStyle', value: () => this.switch().getStyle() },
      { property: 'inputEffects', value: () => this.switch().getEffects() },
      { property: 'inputSettings', value: () => this.switch().getSettings() },
      { property: 'active', value: this.active },
      { property: 'disabled', value: this.disabled },
    ];
    this.refreshLog();
  }
}