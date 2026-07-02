import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MvLibSwitchToggleEvent } from '../switch.event';
import { MvLibSwitchClassicEffects, MvLibSwitchClassicSettings, MvLibSwitchClassicStyles } from '..';

@Component({
  selector: 'mv-lib-switch-classic',
  imports: [CommonModule],
  templateUrl: './switch-classic.component.html',
  styleUrl: './switch-classic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MvLibSwitchClassicComponent {

  public styles = input<Partial<MvLibSwitchClassicStyles>>();
  public effects = input<Partial<MvLibSwitchClassicEffects>>();
  public settings = input<Partial<MvLibSwitchClassicSettings>>();

  public disabled = input<boolean>(false);
  public active = input<boolean>(false);

  public onToggle = output<MvLibSwitchToggleEvent>();
  
  protected computedStyles = computed(() => new MvLibSwitchClassicStyles(this.styles()));
  protected computedEffects = computed(() => new MvLibSwitchClassicEffects(this.effects()));
  protected computedSettings = computed(() => new MvLibSwitchClassicSettings(this.settings()));

  protected computedToggleClasses = computed(() => [
    'toggle',
  ]);
  protected computedSliderClasses = computed(() => [
    'slider',
    ...this.computedEffects().idle,
    ...this.computedEffects().hover,
    ...this.computedEffects().click,
  ]);

  protected computedSliderHoverScale = computed(() => {
    const thumbSizePx = this.computedStyles().heightPx ?? 0;
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
