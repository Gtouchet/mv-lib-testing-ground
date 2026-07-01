import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MvLibSwitchLiteEffects } from './switch-lite.effects';
import { MvLibSwitchLiteSettings } from './switch-lite.settings';
import { MvLibSwitchLiteStyles } from './switch-lite.styles';
import { MvLibSwitchToggleEvent } from '../switch.event';

@Component({
  selector: 'mv-lib-switch-lite',
  imports: [CommonModule],
  templateUrl: './switch-lite.component.html',
  styleUrl: './switch-lite.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MvLibSwitchLiteComponent {

  public styles = input<Partial<MvLibSwitchLiteStyles>>();
  public effects = input<Partial<MvLibSwitchLiteEffects>>();
  public settings = input<Partial<MvLibSwitchLiteSettings>>();

  public disabled = input<boolean>(false);
  public active = input<boolean>(false);

  public onToggle = output<MvLibSwitchToggleEvent>();
  
  protected computedStyles = computed(() => new MvLibSwitchLiteStyles(this.styles()));
  protected computedEffects = computed(() => new MvLibSwitchLiteEffects(this.effects()));
  protected computedSettings = computed(() => new MvLibSwitchLiteSettings(this.settings()));

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
    const thumbSizePx = this.computedStyles().heightPx;
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
