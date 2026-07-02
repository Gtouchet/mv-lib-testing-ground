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

  constructor() {
    super();
    this.logProperties.set(['disabled', 'styles', 'effects', 'settings']);
    this.styles = signal<Partial<MvLibTextboxClassicStyles>>({
      widthPx: 80,
      heightPx: 40,
      color: this.appStyles.var('component-primary'),
      textColor: 'white',
    });
    this.effects = signal<Partial<MvLibTextboxClassicEffects>>({
      idle: ['shadow'],
      hover: ['darken'],
    });
    this.settings = signal<Partial<MvLibTextboxClassicSettings>>({

    });
  }
}
