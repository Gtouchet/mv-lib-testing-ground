import { BaseExampleComponent } from '../../base-example.component';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MvLibTextboxClassicComponent } from 'mv-lib';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { INPUTS } from '../../../inputs/_inputs.export';

@Component({
  selector: 'app-textbox-classic-example',
  imports: [
    CommonModule,
    MvLibTextboxClassicComponent,
    ReactiveFormsModule,
    INPUTS,
],
  templateUrl: './textbox-classic-example.component.html',
  styleUrl: '../../example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class TextboxClassicExampleComponent extends BaseExampleComponent<MvLibTextboxClassicComponent> {

  constructor() {
    super();
    this.logProperties.set(['styles', 'effects', 'settings', 'selected', 'disabled']);
    this.styles = signal({
      dimensions: {
        width: '150px',
        height: '32px',
      },
    });
    this.effects = signal({
      classes: [
        this.mvLibEffects.hover.darken,
        this.mvLibEffects.selected.outlineBlur,
      ],
      style: {
        outlineSolidSelected: {
          color: this.appStyles.var('textbox-classic-outline-solid-selected-color'),
        },
        outlineBlurSelected: {
          color: this.appStyles.var('textbox-classic-outline-blur-selected-color'),
        },
      }
    });
    this.settings = signal({
      
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
