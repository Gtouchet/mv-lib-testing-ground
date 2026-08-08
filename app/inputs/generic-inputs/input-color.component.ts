import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

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
        [value]="value()"
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
  public value = input<string | undefined>(undefined);
  public label = input<string | undefined>(undefined);
  public width = input<number | undefined>(undefined);
  public onChange = output<string>();

  protected handleInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.onChange.emit(input.value);
  }
}
