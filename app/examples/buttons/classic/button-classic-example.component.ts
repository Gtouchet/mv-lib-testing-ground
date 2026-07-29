import { BaseExampleComponent } from '../../base-example.component';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MvLibButtonClassicComponent } from 'mv-lib';
import { INPUTS } from '../../../inputs/inputs.export';
import { PushClickInputsComponent } from "../../../inputs/effect-inputs/push/push-click-inputs.component";

@Component({
  selector: 'app-button-classic-example',
  imports: [
    MvLibButtonClassicComponent,
    INPUTS,
    PushClickInputsComponent
],
  templateUrl: './button-classic-example.component.html',
  styleUrls: [
    './button-classic-example.component.scss',
    '../../example.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ButtonClassicExampleComponent extends BaseExampleComponent<MvLibButtonClassicComponent> {

  constructor() {
    super();
    this.styles = signal({
      backgroundColor: this.appStyles.var('button-classic-background-color'),
      dimensions: {
        width: '120px',
        height: '40px',
      },
      font: {
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
