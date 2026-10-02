import { OverviewDemoBaseComponent } from '../../../_base/overview-demo.base';
import { AfterViewInit, ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { INPUTS } from '../../../../inputs/_inputs.export';
import { MvLibButtonComponent, MvLibButtonStyle, MvLibButtonEffects, MvLibButtonSettings } from 'mv-lib';

@Component({
  selector: 'app-button-overview',
  imports: [
    MvLibButtonComponent,
    INPUTS,
],
  templateUrl: './button-overview.component.html',
  styleUrl: '../../../_base/overview-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ButtonOverviewComponent extends OverviewDemoBaseComponent implements AfterViewInit {

  protected button = viewChild.required<MvLibButtonComponent>('mvLibButtonClassic');

  protected style = signal<Partial<MvLibButtonStyle>>({
    dimensions: {
      width: '120px',
      height: '40px',
    },
  });

  protected effects = signal<Partial<MvLibButtonEffects>>({
    classes: [
      this.mvLibEffects.idle.shadow.class,
      this.mvLibEffects.hover.tint.class,
      this.mvLibEffects.click.push.class,
      this.mvLibEffects.release.ripple.class,
    ],
  });
  
  protected settings = signal<Partial<MvLibButtonSettings>>({

  });

  protected selected = signal(false);

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
