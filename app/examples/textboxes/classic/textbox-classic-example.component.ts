import { BaseExampleComponent } from '../../base-example.component';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MvLibTextboxClassicComponent } from 'mv-lib';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { INPUTS } from '../../../inputs/inputs.export';

@Component({
  selector: 'app-textbox-classic-example',
  imports: [
    CommonModule,
    MvLibTextboxClassicComponent,
    ReactiveFormsModule,
    INPUTS,
],
  templateUrl: './textbox-classic-example.component.html',
  styleUrls: [
    './textbox-classic-example.component.scss',
    '../../example.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class TextboxClassicExampleComponent extends BaseExampleComponent<MvLibTextboxClassicComponent> {

  constructor() {
    super();
    this.additionalLogProperties.set(['selected']);
    this.styles = signal({
      dimensions: {
        width: '150px',
        height: '32px',
      },
    });
    this.settings = signal({
      
    });
    this.effects = signal({
      classes: [
        'mv-lib-darken-hover',
        'mv-lib-outline-blur-selected',
      ],
      styles: {
        outlineSolidSelected: {
          color: this.appStyles.var('textbox-classic-outline-solid-selected-color'),
        },
        outlineBlurSelected: {
          color: this.appStyles.var('textbox-classic-outline-blur-selected-color'),
        },
      }
    });
  }

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
}
