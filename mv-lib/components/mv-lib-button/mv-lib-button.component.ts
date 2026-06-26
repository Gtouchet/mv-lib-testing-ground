import { Component, input, output, computed, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MvLibButtonSettings } from './mv-lib-button.settings';

export interface MvLibButtonClickEvent {
  readonly settings: Partial<MvLibButtonSettings>;
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
  public disabled = input<boolean>(false);
  public onClick = output<MvLibButtonClickEvent>();
  
  protected hover = signal(false);

  protected computedSettings = computed(() => new MvLibButtonSettings(this.settings()));
  protected computedClasses = computed(() => ['mv-lib-button', ...this.computedSettings().onClickEffects]);
}
