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
  protected classes = computed(() => this.initClasses());

  protected computedSettings = computed(() => {
    const computedSettings = new MvLibButtonSettings(this.settings());
    if (this.disabled()) {
      computedSettings.hoverBackgroundColor = computedSettings.backgroundColor;
    }
    return computedSettings;
  });
  
  private initClasses(): string[] {
    const map: string[] = ['mv-lib-button'];
    const effect = this.computedSettings().onClickEffect;
    if (effect !== 'none') {
      map.push(effect);
    }
    return map;
  }

  protected click(event: Event) {
    this.onClick.emit(event);
  }
}
