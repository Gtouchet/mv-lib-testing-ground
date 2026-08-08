import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input-number',
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
        type="number"
        class="input"
        [value]="value()"
        [min]="min()"
        [max]="max()"
        (input)="handleInput($event)"
        [ngStyle]="{
          'width': width() ?? 'auto',
          'flex': !width() ? 1 : 'none',
        }"
      />
    </div>
  `,
})
export class InputNumberComponent {
  public value = input<number | string | undefined>(undefined);
  public label = input<string | undefined>(undefined);
  public min = input<number | undefined>(undefined);
  public max = input<number | undefined>(undefined);
  public width = input<string | undefined>(undefined);
  public onChange = output<number>();

  protected handleInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = !Number.isNaN(input.valueAsNumber) ? input.valueAsNumber : undefined;
    this.onChange.emit(value ?? 0);
  }
}
