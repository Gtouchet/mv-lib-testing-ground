import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input-text',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
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
        type="text"
        [value]="value()"
        (input)="handleInput($event)"
        [ngStyle]="{
          'width': width() ?? 'auto',
          'flex': !width() ? 1 : 'none',
          'height.px': 16,
        }"
      />
    </div>
  `,
})
export class InputTextComponent {
  public value = input<string | number| undefined>(undefined);
  public label = input<string | undefined>(undefined);
  public width = input<string | undefined>(undefined);
  public onChange = output<string>();

  protected handleInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.onChange.emit(inputElement.value);
  }
}
