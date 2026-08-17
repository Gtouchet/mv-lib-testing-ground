import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MvLibThemeService } from 'mv-lib';

@Component({
  selector: 'app-input-color',
  styleUrl: './generic-input.component.scss',
  imports: [CommonModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      [ngStyle]="{
        'display': 'flex',
        'gap.px': 4,
        'align-items': 'center'
      }"
    >
      {{ label() }}
      <input
        type="color"
        [value]="valueColor()"
        (input)="handleInput($event)"
        [ngStyle]="{
          'height.px': 24,
          'width.px': width(),
        }"
      />
      <input
        type="text"
        class="input"
        [value]="value()"
        (input)="handleInput($event)"
        [ngStyle]="{
          'flex': 1,
        }"
      />
    </div>
  `,
})
export class InputColorComponent {

  public readonly themeService = inject(MvLibThemeService);

  public value = input<string | undefined>(undefined);
  public label = input<string | undefined>(undefined);
  public width = input<number | undefined>(undefined);
  public onChange = output<string>();

  protected valueColor = computed(() => {
    const currentValue = this.value();
    if (!currentValue) {
      return '';
    }
    this.themeService.currentTheme();
    return MvLibThemeService.var(currentValue);
  });

  protected handleInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.onChange.emit(input.value);
  }
}
