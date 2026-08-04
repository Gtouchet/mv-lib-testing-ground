import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
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
    parts: {
      track: {
        classes: [
          this.mvLibEffects.idle.shadow.class,
          this.mvLibEffects.hover.tint.class,
          this.mvLibEffects.click.push.class,
          this.mvLibEffects.release.ripple.class,
        ],
      },
      cursor: {
        
      },
    },
  });

  protected animations = signal<Partial<MvLibSwitchClassicAnimations>>({

  });

  protected settings = signal<Partial<MvLibSwitchClassicSettings>>({

  });

  protected active = signal(false);

  protected override refreshLog() {
    var result = ``;
    ['style', 'effects', 'settings', 'disabled'].forEach(property => {
      result += `    [${property}]=\"${this.prettify((this as any)[property])}\",\n`;
    });
    this.log.set(result);
  }
}