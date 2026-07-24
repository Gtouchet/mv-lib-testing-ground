import { BaseExampleComponent } from '../../base-example.component';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MvLibTextboxClassicComponent, MvLibTextboxClassicEffects, MvLibTextboxClassicEffectsStyles, MvLibTextboxClassicSettings, MvLibTextboxClassicStyles } from 'mv-lib';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { INPUTS } from '../../../shared/generic-inputs/_generic-inputs.export';
import { SPECIFIC_INPUTS } from '../../../shared/specific-inputs/sepcific-inputs.export';

@Component({
  selector: 'app-textbox-classic-example',
  imports: [
    MvLibTextboxClassicComponent,
    ReactiveFormsModule,
    INPUTS,
    SPECIFIC_INPUTS,
],
  templateUrl: './textbox-classic-example.component.html',
  styleUrls: [
    './textbox-classic-example.component.scss',
    '../../testing-ground.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class TextboxClassicExampleComponent extends BaseExampleComponent<
  MvLibTextboxClassicStyles,
  MvLibTextboxClassicEffects,
  MvLibTextboxClassicEffectsStyles,
  MvLibTextboxClassicSettings
> {
  constructor() {
    super();
    this.logProperties.set(['disabled', 'selected', 'styles', 'effects', 'settings']);
    this.styles = signal<Partial<MvLibTextboxClassicStyles>>({
      width: '150px',
      height: '32px',
      backgroundColor: this.appStyles.var('textbox-classic-color'),

      border: {
        width: this.appStyles.var('textbox-classic-border-width'),
        style: this.appStyles.var('textbox-classic-border-style'),
        color: this.appStyles.var('textbox-classic-border-color'),
        radius: this.appStyles.var('textbox-classic-border-radius'),
      },

      font: {
        size: this.appStyles.var('textbox-classic-font-size'),
        weight: this.appStyles.var('textbox-classic-font-weight'),
        style: this.appStyles.var('textbox-classic-font-style'),
        color: this.appStyles.var('textbox-classic-font-color'),
      },
    });
    this.effects = signal<Partial<MvLibTextboxClassicEffects>>({
      hover: ['darken'],
      selected: ['outline-solid'],
    });
    this.effectsStyles = signal<Partial<MvLibTextboxClassicEffectsStyles>>({
      hover_darkenPercentage: '10',
      selected_outlineColor: this.appStyles.var('textbox-outline-effect-color'),
      selected_outlineSolidWidth: this.appStyles.var('textbox-outline-effect-solid-width'),
      selected_outlineBlurRadius: this.appStyles.var('textbox-outline-effect-blur-radius'),
    });
    this.settings = signal<Partial<MvLibTextboxClassicSettings>>({
      selected: false,
    });
  }

  protected initForm() {
    this.form.addControl('input', new FormControl({
      value: 'Enter text',
      disabled: false,
    }, [
      this.required() ? Validators.required : Validators.nullValidator,
      this.minLength() !== undefined ? Validators.minLength(this.minLength()!) : Validators.nullValidator,
      this.onlyCharacters() ? Validators.pattern(this.onlyCharactersRegex) : Validators.nullValidator,
    ]));
  }
}
