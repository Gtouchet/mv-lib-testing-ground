import { BaseExampleComponent } from '../../base-example.component';
import { AfterViewInit, ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { MvLibTextboxClassicAnimations, MvLibTextboxClassicComponent, MvLibTextboxClassicEffects, MvLibTextboxClassicSettings, MvLibTextboxClassicStyle } from 'mv-lib';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { INPUTS } from '../../../inputs/_inputs.export';

@Component({
  selector: 'app-textbox-classic-example',
  imports: [
    MvLibTextboxClassicComponent,
    ReactiveFormsModule,
    INPUTS,
],
  templateUrl: './textbox-classic-example.component.html',
  styleUrl: '../../example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class TextboxClassicExampleComponent extends BaseExampleComponent implements AfterViewInit {

  protected textbox = viewChild.required<MvLibTextboxClassicComponent>('mvLibTextboxClassic');

  protected style = signal<Partial<MvLibTextboxClassicStyle>>({
    dimensions: {
      width: '150px',
      height: '32px',
    },
  });
  
  protected effects = signal<Partial<MvLibTextboxClassicEffects>>({
    classes: [
      this.mvLibEffects.hover.tint.class,
      this.mvLibEffects.selected.outlineBlur.class,
    ],
  });

  protected animations = signal<Partial<MvLibTextboxClassicAnimations>>({

  });

  protected settings = signal<Partial<MvLibTextboxClassicSettings>>({

  });

  protected selected = signal(false);

  protected override initForm() {
    this.form.addControl('input', new FormControl({
      value: 'Enter text',
      disabled: false,
    }, [
      this.required() ? Validators.required : Validators.nullValidator,
      this.minLength() !== undefined ? Validators.minLength(this.minLength()!) : Validators.nullValidator,
      this.onlyCharacters() ? Validators.pattern(this.onlyCharactersRegex) : Validators.nullValidator,
    ]));
  }

  ngAfterViewInit() {
    this.logProperties = [
      { property: 'style', value: () => this.textbox().getStyle() },
      { property: 'effects', value: () => this.textbox().getEffects() },
      { property: 'settings', value: () => this.textbox().getSettings() },
      { property: 'selected', value: this.textbox().selected },
      { property: 'disabled', value: this.textbox().isDisabled },
    ];
    this.refreshLog();
  }
}
