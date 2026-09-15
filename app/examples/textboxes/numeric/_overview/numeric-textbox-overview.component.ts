import { OverviewDemoBaseComponent } from '../../../_base/overview-demo.base';
import { AfterViewInit, ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { INPUTS } from '../../../../inputs/_inputs.export';
import { MvLibNumericTextboxComponent, MvLibNumericTextboxEffects, MvLibNumericTextboxSettings, MvLibNumericTextboxStyle } from 'mv-lib';

@Component({
  selector: 'app-numeric-textbox-overview',
  imports: [
    MvLibNumericTextboxComponent,
    ReactiveFormsModule,
    INPUTS,
],
  templateUrl: './numeric-textbox-overview.component.html',
  styleUrl: '../../../_base/overview-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class NumericTextboxOverviewComponent extends OverviewDemoBaseComponent implements AfterViewInit {

  protected _textbox = viewChild.required<MvLibNumericTextboxComponent>('textbox');

  protected style = signal<Partial<MvLibNumericTextboxStyle>>({
    dimensions: {
      width: '150px',
      height: '32px',
    },
  });
  
  protected effects = signal<Partial<MvLibNumericTextboxEffects>>({
    
  });

  protected settings = signal<Partial<MvLibNumericTextboxSettings>>({
    unit: {
      value: '€',
    },
  });

  protected override initForm() {
    this.forms['default'] = new UntypedFormGroup({
      input: new FormControl({
        value: 10,
        disabled: false,
      }, [
        this.required() ? Validators.required : Validators.nullValidator,
        this.minLength() ? Validators.minLength(this.minLength()!) : Validators.nullValidator,
      ]),
    });
  }

  ngAfterViewInit() {
    this.selectedPartStyle = signal<string>('textbox');
    this.selectedPartEffects = signal<string>('textbox');
    this.selectedPartSettings = signal<string>('textbox');
    this.logProperties = [
      { property: 'inputStyle', value: () => this._textbox().getStyle() },
      { property: 'inputEffects', value: () => this._textbox().getEffects() },
      { property: 'inputSettings', value: () => this._textbox().getSettings() },
    ];
    this.refreshLog();
  }
}
