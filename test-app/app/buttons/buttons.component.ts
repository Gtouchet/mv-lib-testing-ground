import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MvLibButtonComponent, MvLibButtonOnClickEvent } from '../../../mv-lib/components';
import { MvLibButtonSettings } from '../../../mv-lib/components/mv-lib-button/mv-lib-button.settings';
import { MvLibButtonClickEffect, MvLibButtonEffects, MvLibButtonHoverEffect, MvLibButtonIdleEffect } from '../../../mv-lib/components/mv-lib-button/mv-lib-button.effects';

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
  protected log = signal('');

  protected onButtonClick(event: MvLibButtonOnClickEvent) {
    this.log.set(`
Button clicked at ${new Date().toLocaleTimeString()}
settings: ${JSON.stringify(event.settings, null, 4)}
effects: ${JSON.stringify(event.effects, null, 4)}
    `);
  }

  /**
   * Settings update functions
   */
  protected updateWidth(event: Event) {
    const target = event.target as HTMLInputElement | null;
    this.buttonSettings.update(current => ({
      ...current,
      widthPx: Number(target?.value),
    }));
  }

  protected updateHeight(event: Event) {
    const target = event.target as HTMLInputElement | null;
    this.buttonSettings.update(current => ({
      ...current,
      heightPx: Number(target?.value),
    }));
  }

  protected updateBackgroundColor(event: Event) {
    const target = event.target as HTMLInputElement | null;
    this.buttonSettings.update(current => ({
      ...current,
      backgroundColor: target?.value ?? current.backgroundColor,
    }));
  }

  protected updateTextColor(event: Event) {
    const target = event.target as HTMLInputElement | null;
    this.buttonSettings.update(current => ({
      ...current,
      textColor: target?.value ?? current.textColor,
    }));
  }

  /**
   * Effects update functions
   */
  protected changeIdleEffect(event: any, effect: MvLibButtonIdleEffect) {
    this.buttonEffects.update(current => ({
      ...current,
      idle: event.target.checked
        ? [...(current.idle ?? []), effect]
        : (current.idle ?? []).filter(e => e !== effect),
    }));
  }

  protected changeHoverEffect(event: any, effect: MvLibButtonHoverEffect) {
    this.buttonEffects.update(current => ({
      ...current,
      hover: event.target.checked
        ? [...(current.hover ?? []), effect]
        : (current.hover ?? []).filter(e => e !== effect),
    }));
  }

  protected changeClickEffect(event: any, effect: MvLibButtonClickEffect) {
    this.buttonEffects.update(current => ({
      ...current,
      click: event.target.checked
        ? [...(current.click ?? []), effect]
        : (current.click ?? []).filter(e => e !== effect),
    }));
  }
}
