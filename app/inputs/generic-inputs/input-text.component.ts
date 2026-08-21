import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input-text',
  styleUrl: './generic-input.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <div
      [ngStyle]="{
        'display': 'flex',
        'gap.px': 4,
        'align-items': 'center',
        'opacity': disabled() ? 0.5 : 1,
      }"
    >
      {{ label() }}
      <input
        type="text"
        class="input"
        [value]="value()"
        (input)="handleInput($event)"
        [disabled]="disabled()"
        [ngStyle]="{
          'width': width() ?? 'auto',
          'flex': !width() ? 1 : 'none',
        }"
      />
    </div>
  `,
})
export class InputTextComponent {
  public value = input<string | number | undefined>(undefined);
  public label = input<string | undefined>(undefined);
  public width = input<string | undefined>(undefined);
  public disabled = input<boolean>(false);
  public onChange = output<string>();

  protected handleInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.onChange.emit(inputElement.value);
  }
}
