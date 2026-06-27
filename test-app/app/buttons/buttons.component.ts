import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MvLibButtonClassicComponent, MvLibButtonClassicEffects, MvLibButtonClassicSettings } from 'mv-lib';

@Component({
  selector: 'app-buttons-test',
  imports: [MvLibButtonClassicComponent],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ButtonsComponent {

  protected buttonSettings = signal<Partial<MvLibButtonClassicSettings>>({
    widthPx: 100,
    heightPx: 40,
    backgroundColor: 'dodgerblue',
    textColor: 'white',
  });
  protected buttonEffects = signal<Partial<MvLibButtonClassicEffects>>({
    idle: [],
    hover: ['darken'],
    click: ['push'],
  });

  protected disabled = signal(false);
  protected lastClickedTime = signal<string>('00:00:00');
  protected log = signal('');

  constructor() {
    this.refreshLog();
  }
  
  protected setLastClickedTime() {
    this.lastClickedTime.set(new Date().toLocaleTimeString());
    this.refreshLog();
  }

  protected refreshLog() {
    const settings = JSON.stringify(this.buttonSettings(), null, 4)
      .replace(/"([^\"]+)":/g, '$1:')
      .replace(/"/g, "'");
    const effects = JSON.stringify(this.buttonEffects(), null, 4)
      .replace(/"([^\"]+)":/g, '$1:')
      .replace(/"/g, "'");
    this.log.set(`
Button clicked at ${this.lastClickedTime()}
[disabled]=\"${this.disabled()}\"
[settings]=\"${settings}\",
[effects]=\"${effects}\"
    `);
  }

  protected updateSetting(
    key: 'widthPx' | 'heightPx' | 'backgroundColor' | 'textColor',
    event: any,
  ) {
    this.buttonSettings.update(current => ({
      ...current,
      [key]: event.target.value,
    }));
    this.refreshLog();
  }

  protected updateEffect(event: any) {
    this.buttonEffects.update(current => {
      const [type, value] = event.target.getAttribute('effect').split('.');
      const currentValues = current[type as keyof typeof current] ?? [];
      return {
        ...current,
        [type]: event.target.checked
          ? [...currentValues, value]
          : currentValues.filter(effect => effect !== value),
      };
    });
    this.refreshLog();
  }
}
