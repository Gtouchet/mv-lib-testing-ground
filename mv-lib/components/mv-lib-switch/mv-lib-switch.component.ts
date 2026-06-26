import { ChangeDetectionStrategy, Component, computed, effect, input, output, signal } from '@angular/core';
import { MvLibSwitchSettings } from './mv-lib-switch.settings';

export interface MvLibSwitchClickEvent {
  readonly active: boolean;
  readonly settings: Readonly<Partial<MvLibSwitchSettings>>;
  readonly event: Readonly<Event>;
}

@Component({
  selector: 'mv-lib-switch',
  imports: [],
  templateUrl: './mv-lib-switch.component.html',
  styleUrl: './mv-lib-switch.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MvLibSwitchComponent {

  public settings = input<Partial<MvLibSwitchSettings>>();
  public active = input<boolean>(false);
  public disabled = input<boolean>(false);

  public onClick = output<MvLibSwitchClickEvent>();

  protected _active = signal(this.active());
  protected computedSettings = computed(() => new MvLibSwitchSettings(this.settings()));

  constructor() {
    effect(() => this._active.set(this.active()));
  }
}
