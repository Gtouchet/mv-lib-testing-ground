import { Component, input, output, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MvLibButtonSettings } from './mv-lib-button.settings';

export interface MvLibButtonClickEvent {
  readonly buttonSettings: Readonly<Partial<MvLibButtonSettings>>;
  readonly event: Readonly<Event>;
}

@Component({
  selector: 'mv-lib-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mv-lib-button.component.html',
  styleUrls: ['./mv-lib-button.component.scss'],
})
export class MvLibButtonComponent {

  public settings = input<Partial<MvLibButtonSettings>>();
  public disabled = input<boolean>(false);
  public onClick = output<MvLibButtonClickEvent>();
  
  protected hover = signal(false);

  protected computedSettings = computed(() => this.computeSettings());
  protected computedClasses = computed(() => this.computeClasses());
  
  private computeSettings(): MvLibButtonSettings {
    const computedSettings = new MvLibButtonSettings(this.settings());
    if (this.disabled()) {
      computedSettings.backgroundColorHover = computedSettings.backgroundColor;
    }
    return computedSettings;
  }

  private computeClasses(): string[] {
    return [
      'mv-lib-button',
      ...this.computedSettings().onClickEffects,
    ];
  }
}
