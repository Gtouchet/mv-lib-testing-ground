import { BaseExampleComponent } from '../../base-example.component';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { StylesService } from '../../../../styles/styles.service';
import { MvLibTextboxClassicComponent, MvLibTextboxClassicEffects, MvLibTextboxClassicSettings, MvLibTextboxClassicStyles } from 'mv-lib';

@Component({
  selector: 'app-textbox-classic-example',
  imports: [MvLibTextboxClassicComponent],
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
  protected value = signal<string | undefined>('Enter text here');

  constructor() {
    super();
    this.logProperties.set(['disabled', 'selected', 'styles', 'effects', 'settings']);
    this.styles = signal<Partial<MvLibTextboxClassicStyles>>({
      widthPx: 150,
      heightPx: 32,
      backgroundColor: 'white',
      textColor: 'black',
      borderColor: 'black',
      selectedOutlineColor: 'lightskyblue',
    });
    this.effects = signal<Partial<MvLibTextboxClassicEffects>>({
      hover: ['darken'],
      selected: ['outline'],
    });
    this.settings = signal<Partial<MvLibTextboxClassicSettings>>({
      selected: false,
    });
  }
}
