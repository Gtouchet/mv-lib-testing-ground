import { BaseExampleComponent } from '../../base-example.component';
import { AfterViewInit, ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { INPUTS } from '../../../inputs/_inputs.export';
import { MvLibButtonClassicComponent, MvLibButtonClassicStyle, MvLibButtonClassicEffects, MvLibButtonClassicSettings } from 'mv-lib';

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
export class ButtonClassicExampleComponent extends BaseExampleComponent implements AfterViewInit {

  protected button = viewChild.required<MvLibButtonClassicComponent>('mvLibButtonClassic');

  protected style = signal<Partial<MvLibButtonClassicStyle>>({
    dimensions: {
      width: '120px',
      height: '40px',
    },
  });

  protected effects = signal<Partial<MvLibButtonClassicEffects>>({
    classes: [
      this.mvLibEffects.idle.shadow.class,
      this.mvLibEffects.hover.tint.class,
      this.mvLibEffects.click.push.class,
      this.mvLibEffects.release.ripple.class,
    ],
  });
  
  protected settings = signal<Partial<MvLibButtonClassicSettings>>({

  });

  ngAfterViewInit() {
    this.logProperties = [
      { property: 'inputStyle', value: () => this.button().getStyle() },
      { property: 'inputEffects', value: () => this.button().getEffects() },
      { property: 'inputSettings', value: () => this.button().getSettings() },
      { property: 'disabled', value: this.disabled() },
    ];
    this.refreshLog();
  }
}
