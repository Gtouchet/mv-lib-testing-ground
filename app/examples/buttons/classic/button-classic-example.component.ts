import { BaseExampleComponent } from '../../base-example.component';
import { AfterViewInit, ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { INPUTS } from '../../../inputs/_inputs.export';
import { MvLibButtonClassicComponent, MvLibButtonClassicStyle, MvLibButtonClassicEffects, MvLibButtonClassicAnimations, MvLibButtonClassicSettings } from 'mv-lib';

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

  protected effects = signal<Partial<MvLibButtonClassicEffects>>({
    classes: [
      this.mvLibEffects.idle.shadow.class,
      this.mvLibEffects.hover.tint.class,
      this.mvLibEffects.click.push.class,
      this.mvLibEffects.release.ripple.class,
    ],
  });

  protected animations = signal<Partial<MvLibButtonClassicAnimations>>({

  });
  
  protected settings = signal<Partial<MvLibButtonClassicSettings>>({

  });

  ngAfterViewInit() {
    this.logProperties = [
      { property: 'style', value: this.button().computedStyles },
      { property: 'effects', value: this.button().computedEffects },
      { property: 'settings', value: this.button().computedSettings },
      { property: 'disabled', value: this.disabled },
    ];
    this.refreshLog();
  }
}
