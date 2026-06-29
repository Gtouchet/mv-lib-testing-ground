import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MvLibSwitchClassicSettings } from './switch-classic.settings';
import { MvLibSwitchClassicEffects } from './switch-classic.effects';

export interface MvLibSwitchClassicClickEvent {
  readonly active: boolean;
  readonly event: Readonly<Event>;
}

@Component({
  selector: 'mv-lib-switch-classic',
  imports: [CommonModule],
  templateUrl: './switch-classic.component.html',
  styleUrl: './switch-classic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MvLibSwitchClassicComponent {

  public settings = input<Partial<MvLibSwitchClassicSettings>>();
  public effects = input<Partial<MvLibSwitchClassicEffects>>();
  public disabled = input<boolean>(false);
  public active = input<boolean>(false);

  public onToggle = output<MvLibSwitchClassicClickEvent>();
  
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

  protected handleToggle(event: Event): void {
    if (this.disabled()) return;
    this.onToggle.emit({
      active: !this.active(),
      event: event,
    });
  }
}
