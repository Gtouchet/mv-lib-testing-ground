import { Component, input, output, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MvLibButtonClassicStyles } from './button-classic.styles';
import { MvLibButtonClassicEffects } from './button-classic.effects';
import { MvLibButtonClassicSettings } from './button-classic.settings';

@Component({
  selector: 'mv-lib-button-classic',
  imports: [CommonModule],
  templateUrl: './button-classic.component.html',
  styleUrls: ['./button-classic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MvLibButtonClassicComponent {

  public styles = input<Partial<MvLibButtonClassicStyles>>();
  public effects = input<Partial<MvLibButtonClassicEffects>>();
  public settings = input<Partial<MvLibButtonClassicSettings>>();
  
  public disabled = input<boolean>(false);
  
  public onClick = output<Event>();

  protected computedStyles = computed(() => new MvLibButtonClassicStyles(this.styles()));
  protected computedEffects = computed(() => new MvLibButtonClassicEffects(this.effects()));
  protected computedSettings = computed(() => new MvLibButtonClassicSettings(this.settings()));
  
  protected computedClasses = computed(() => [
    'button',
    ...this.computedEffects().idle,
    ...this.computedEffects().hover,
    ...this.computedEffects().click,
  ]);
}
