import { BaseExampleComponent } from '../../base-example.component';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MvLibButtonClassicComponent, MvLibButtonClassicEffects, MvLibButtonClassicSettings, MvLibButtonClassicStyles, MvLibRadioButtonsClassicComponent, MvLibToastService } from 'mv-lib';
import { StylesService } from '../../../../styles/styles.service';
import { INPUTS } from '../../../shared/inputs/inputs.export';

@Component({
  selector: 'app-button-classic-example',
  imports: [
    MvLibButtonClassicComponent,
    INPUTS,
    MvLibRadioButtonsClassicComponent,
  ],
  templateUrl: './button-classic-example.component.html',
  styleUrls: [
    './button-classic-example.component.scss',
    '../../testing-ground.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ButtonClassicExampleComponent extends BaseExampleComponent<
  MvLibButtonClassicStyles,
  MvLibButtonClassicEffects,
  MvLibButtonClassicSettings
> {

  protected appStyles = inject(StylesService);
  protected toastService = inject(MvLibToastService);

  constructor() {
    super();
    this.logProperties.set(['disabled', 'styles', 'effects', 'settings']);
    this.styles = signal<Partial<MvLibButtonClassicStyles>>({
      widthPx: 80,
      heightPx: 40,
      backgroundColor: this.appStyles.var('button-classic-background-color'),
      textColor: this.appStyles.var('button-classic-text-color'),
    });
    this.effects = signal<Partial<MvLibButtonClassicEffects>>({
      idle: ['shadow'],
      hover: ['darken'],
      click: ['push'],
    });
    this.settings = signal<Partial<MvLibButtonClassicSettings>>({

    });
  }

  protected initForm() {
    
  }
}
