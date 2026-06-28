import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MvLibSwitchClassicSettings } from './mv-lib-switch-classic.settings';
import { MvLibSwitchClassicEffects } from './mv-lib-switch-classic.effects';

export interface MvLibSwitchClassicClickEvent {
  readonly active: boolean;
  readonly event: Readonly<Event>;
}

@Component({
  selector: 'mv-lib-switch-classic',
  imports: [CommonModule],
  templateUrl: './mv-lib-switch-classic.component.html',
  styleUrl: './mv-lib-switch-classic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MvLibSwitchClassicComponent {

  public settings = input<Partial<MvLibSwitchClassicSettings>>();
  public effects = input<Partial<MvLibSwitchClassicEffects>>();
  public disabled = input<boolean>(false);
  public active = input<boolean>(false);

  public onClick = output<MvLibSwitchClassicClickEvent>();
  
  protected computedSettings = computed(() => new MvLibSwitchClassicSettings(this.settings()));
  protected computedEffects = computed(() => new MvLibSwitchClassicEffects(this.effects()));

  protected computedLabelClasses = computed(() => [
    'toggle',
  ]);
  protected computedSliderClasses = computed(() => [
    'slider',
    ...this.computedEffects().idle,
    ...this.computedEffects().hover,
    ...this.computedEffects().click,
  ]);

  protected computedThumbHoverScale = computed(() => {
    const thumbSizePx = this.computedSettings().heightPx ?? 0;
    return thumbSizePx <= 0 ? '1' : String(Math.min(1.2, 1 + (5 / thumbSizePx)));
  });
}
