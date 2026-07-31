import { BaseExampleComponent } from '../../base-example.component';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MvLibButtonClassicComponent } from 'mv-lib';
import { INPUTS } from '../../../inputs/_inputs.export';

@Component({
  selector: 'app-button-classic-example',
  imports: [
    MvLibButtonClassicComponent,
    INPUTS,
],
  templateUrl: './button-classic-example.component.html',
  styleUrl: '../../example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ButtonClassicExampleComponent extends BaseExampleComponent<MvLibButtonClassicComponent> {

  constructor() {
    super();
    this.logProperties.set(['styles', 'effects', 'settings', 'disabled']);
    this.styles = signal({
      backgroundColor: this.appStyles.var('button-classic-background-color'),
      dimensions: {
        width: '120px',
        height: '40px',
      },
      font: {
        size: this.appStyles.var('button-classic-font-size'),
        weight: this.appStyles.var('button-classic-font-weight'),
        color: this.appStyles.var('button-classic-font-color'),
      },
    });
    this.effects = signal({
      classes: [
        this.mvLibEffects.idle.shadow,
        this.mvLibEffects.hover.darken,
        this.mvLibEffects.click.push,
        this.mvLibEffects.release.ripple,
      ],
    });
    this.settings = signal({

    });
  }
}
