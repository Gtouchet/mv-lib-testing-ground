import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MvLibButtonComponent } from '../../../mv-lib/components';
import { MvLibButtonSettings } from '../../../mv-lib/components/mv-lib-button/mv-lib-button.settings';
import { MvLibButtonEffects } from '../../../mv-lib/components/mv-lib-button/mv-lib-button.effects';

@Component({
  selector: 'app-buttons-test',
  imports: [MvLibButtonComponent],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ButtonsComponent {

  protected buttonSettings = signal<Partial<MvLibButtonSettings>>({
    widthPx: 100,
    heightPx: 40,
    backgroundColor: 'gray',
    textColor: 'white',
  });
  protected buttonEffects = signal<Partial<MvLibButtonEffects>>({

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
  const value =
    key === 'widthPx' || key === 'heightPx'
      ? Number(event.target.value)
      : String(event.target.value);
  this.buttonSettings.update(current => ({
    ...current,
    [key]: value,
  }));
  this.refreshLog();
}

  protected updateEffect(event: any) {
    const [effectType, effectValue] = event.target.getAttribute('effect').split('.');
    this.buttonEffects.update(current => {
      const currentValues = current[effectType as keyof typeof current] ?? [];
      return {
        ...current,
        [effectType]: event.target.checked
          ? [...currentValues, effectValue]
          : currentValues.filter(v => v !== effectValue),
      };
    });
    this.refreshLog();
  }
}
