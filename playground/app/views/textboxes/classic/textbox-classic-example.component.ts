import { BaseExampleComponent } from '../../base-example.component';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { StylesService } from '../../../../styles/styles.service';
import { MvLibTextboxClassicComponent, MvLibTextboxClassicEffects, MvLibTextboxClassicSettings, MvLibTextboxClassicStyles } from 'mv-lib';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-textbox-classic-example',
  imports: [MvLibTextboxClassicComponent, ReactiveFormsModule],
  templateUrl: './textbox-classic-example.component.html',
  styleUrls: [
    './textbox-classic-example.component.scss',
    '../../playground.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class TextboxClassicExampleComponent extends BaseExampleComponent<
  MvLibTextboxClassicStyles,
  MvLibTextboxClassicEffects,
  MvLibTextboxClassicSettings
> {

  protected appStyles = inject(StylesService);

  protected selected = signal(false);

  protected required = signal(true);
  protected minLength = signal(3);
  protected onlyCharacters = signal(true);

  constructor() {
    super();
    this.logProperties.set(['disabled', 'selected', 'styles', 'effects', 'settings']);
    this.styles = signal<Partial<MvLibTextboxClassicStyles>>({
      widthPx: 150,
      heightPx: 32,
      backgroundColor: 'white',
      textColor: 'black',
      borderColor: 'black',
      selectedOutlineColor: this.appStyles.var('outline-primary'),
    });
    this.effects = signal<Partial<MvLibTextboxClassicEffects>>({
      hover: ['darken'],
      selected: ['outline'],
    });
    this.settings = signal<Partial<MvLibTextboxClassicSettings>>({
      selected: false,
    });
  }

  protected initForm() {
    this.form.addControl('input', new FormControl('Enter text', [
      this.required() ? Validators.required : Validators.nullValidator,
      Validators.minLength(this.minLength()),
      this.onlyCharacters() ? Validators.pattern(this.onlyCharactersRegex) : Validators.nullValidator,
    ]));
  }
}
