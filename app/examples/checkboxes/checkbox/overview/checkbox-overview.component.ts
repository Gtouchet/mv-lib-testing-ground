import { OverviewDemoBaseComponent } from '../../../_base/overview-demo.base';
import { AfterViewInit, ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { INPUTS } from '../../../../inputs/_inputs.export';
import { MvLibCheckboxComponent, MvLibCheckboxStyle, MvLibCheckboxEffects, MvLibCheckboxSettings } from 'mv-lib';

@Component({
  selector: 'app-checkbox-classic-example',
  imports: [
    MvLibCheckboxComponent,
    INPUTS,
],
  templateUrl: './checkbox-overview.component.html',
  styleUrl: '../../../_base/overview-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class CheckboxOverviewComponent extends OverviewDemoBaseComponent implements AfterViewInit {

  protected checkbox = viewChild.required<MvLibCheckboxComponent>('mvLibCheckboxClassic');

  protected style = signal<Partial<MvLibCheckboxStyle>>({
    
  });

  protected effects = signal<Partial<MvLibCheckboxEffects>>({
    classes: [
      this.mvLibEffects.hover.tint.class,
    ],
  });

  protected settings = signal<Partial<MvLibCheckboxSettings>>({

  });

  protected checked = signal(false);

  ngAfterViewInit() {
    this.logProperties = [
      { property: 'inputStyle', value: () => this.checkbox().getStyle() },
      { property: 'inputEffects', value: () => this.checkbox().getEffects() },
      { property: 'inputSettings', value: () => this.checkbox().getSettings() },
      { property: 'checked', value: () => this.checked() },
      { property: 'disabled', value: this.disabled() },
    ];
    this.refreshLog();
  }
}
