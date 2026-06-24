import { Component, input, output, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MvLibButtonSettings } from './mv-lib-button.settings';

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
  public onClick = output<Event>();
  
  protected hover = signal(false);
  protected computedSettings = computed(() => this.initSettings());
  
  private initSettings(): MvLibButtonSettings {
    const computedSettings = new MvLibButtonSettings(this.settings());
    if (this.disabled()) {
      computedSettings.hoverBackgroundColor = computedSettings.backgroundColor;
    }
    return computedSettings;
  }
}
