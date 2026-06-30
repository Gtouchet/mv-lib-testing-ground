import { Component, input, output, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MvLibButtonClassicSettings } from './button-classic.settings';
import { MvLibButtonClassicEffects } from './button-classic.effects';

@Component({
  selector: 'mv-lib-button-classic',
  imports: [CommonModule],
  templateUrl: './button-classic.component.html',
  styleUrls: ['./button-classic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MvLibButtonClassicComponent {

  public settings = input<Partial<MvLibButtonClassicSettings>>();
  public effects = input<Partial<MvLibButtonClassicEffects>>();
  public disabled = input<boolean>(false);
  
  public onClick = output<Event>();

  protected computedSettings = computed(() => new MvLibButtonClassicSettings(this.settings()));
  protected computedEffects = computed(() => new MvLibButtonClassicEffects(this.effects()));
  
  protected computedClasses = computed(() => [
    'button',
    ...this.computedEffects().idle,
    ...this.computedEffects().hover,
    ...this.computedEffects().click,
  ]);
}
