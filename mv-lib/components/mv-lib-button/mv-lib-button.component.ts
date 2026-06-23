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
  public clicked = output<Event>();

  protected hover = signal(false);
  protected classes = computed(() => this.initClasses());

  protected computedSettings = computed(() => {
    return new MvLibButtonSettings(this.settings());
  });
  
  private initClasses(): string[] {
    const map: string[] = ['mv-lib-button'];
    if (this.computedSettings().onClickEffect) {
      map.push(this.computedSettings().onClickEffect);
    }
    return map;
  }

  protected onClick(event: Event) {
    this.clicked.emit(event);
  }
}
