import { BaseExampleComponent } from '../../base-example.component';
import { AfterViewInit, ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { INPUTS } from '../../../inputs/_inputs.export';
import { MvLibCheckboxClassicComponent, MvLibCheckboxClassicStyle, MvLibCheckboxClassicEffects, MvLibCheckboxClassicSettings } from 'mv-lib';

@Component({
  selector: 'app-checkbox-classic-example',
  imports: [
    MvLibCheckboxClassicComponent,
    INPUTS,
],
  templateUrl: './checkbox-classic-example.component.html',
  styleUrl: '../../example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class CheckboxClassicExampleComponent extends BaseExampleComponent implements AfterViewInit {

  protected checkbox = viewChild.required<MvLibCheckboxClassicComponent>('mvLibCheckboxClassic');

  protected style = signal<Partial<MvLibCheckboxClassicStyle>>({
    
  });

  protected effects = signal<Partial<MvLibCheckboxClassicEffects>>({
    classes: [
      this.mvLibEffects.hover.resize.class,
      this.mvLibEffects.hover.tint.class,
    ],
  });

  protected settings = signal<Partial<MvLibCheckboxClassicSettings>>({

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
