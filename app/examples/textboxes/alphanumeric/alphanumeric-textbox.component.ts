import { OverviewDemoBaseComponent } from '../../_base/overview-demo.base';
import { AfterViewInit, ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { INPUTS } from '../../../inputs/_inputs.export';
import { MvLibAlphanumericTextboxComponent, MvLibAlphanumericTextboxEffects, MvLibAlphanumericTextboxSettings, MvLibAlphanumericTextboxStyle } from 'mv-lib';

@Component({
  selector: 'app-alphanumeric-textbox',
  imports: [
    MvLibAlphanumericTextboxComponent,
    ReactiveFormsModule,
    INPUTS,
],
  templateUrl: './alphanumeric-textbox.component.html',
  styleUrl: '../../_base/overview-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class AlphanumericTextboxComponent extends OverviewDemoBaseComponent implements AfterViewInit {

  protected textbox = viewChild.required<MvLibAlphanumericTextboxComponent>('alphanumericTextbox');

  protected style = signal<Partial<MvLibAlphanumericTextboxStyle>>({
    dimensions: {
      width: '150px',
      height: '32px',
    },
  });
  
  protected effects = signal<Partial<MvLibAlphanumericTextboxEffects>>({
    classes: [
      this.mvLibEffects.hover.tint.class,
      this.mvLibEffects.selected.outlineSolid.class,
    ],
  });

  protected settings = signal<Partial<MvLibAlphanumericTextboxSettings>>({

  });

  protected override initForm() {
    this.forms['default'] = new UntypedFormGroup({
      input: new FormControl({
        value: 'Enter text',
        disabled: false,
      }, [
        this.required() ? Validators.required : Validators.nullValidator,
        this.minLength() ? Validators.minLength(this.minLength()!) : Validators.nullValidator,
        this.onlyCharacters() ? Validators.pattern(this.onlyCharactersRegex) : Validators.nullValidator,
      ]),
    });
  }

  ngAfterViewInit() {
    this.logProperties = [
      { property: 'inputStyle', value: () => this.textbox().getStyle() },
      { property: 'inputEffects', value: () => this.textbox().getEffects() },
      { property: 'inputSettings', value: () => this.textbox().getSettings() },
    ];
    this.refreshLog();
  }
}
