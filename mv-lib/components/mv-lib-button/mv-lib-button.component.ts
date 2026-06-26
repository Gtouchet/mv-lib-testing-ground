import { Component, input, output, computed, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MvLibButtonSettings } from './mv-lib-button.settings';
import { MvLibButtonEffects } from './mv-lib-button.effects';

export interface MvLibButtonOnClickEvent {
  readonly settings: Partial<MvLibButtonSettings>;
  readonly effects: Partial<MvLibButtonEffects>;
  readonly event: Event;
}

@Component({
  selector: 'mv-lib-button',
  imports: [CommonModule],
  templateUrl: './mv-lib-button.component.html',
  styleUrls: ['./mv-lib-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MvLibButtonComponent {

  public settings = input<Partial<MvLibButtonSettings>>();
  public effects = input<Partial<MvLibButtonEffects>>();
  public disabled = input<boolean>(false);
  
  public onClick = output<MvLibButtonOnClickEvent>();

  protected computedSettings = computed(() => new MvLibButtonSettings(this.settings()));
  protected computedEffects = computed(() => new MvLibButtonEffects(this.effects()));

  protected computedClasses = computed(() => [
    'mv-lib-button',
    ...this.computedEffects().idle,
    ...this.computedEffects().hover,
    ...this.computedEffects().click,
  ]);
}
