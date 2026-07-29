import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input-radio',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <div
      [ngStyle]="{
        'display': 'flex',
        'flex-direction': 'column',
      }"
    >
      @for (value of values(); track $index) {
        <div
          [ngStyle]="{
            'display': 'flex',
            'align-items': 'center',
            'gap.px': 6,
          }">
          <input
            type="radio"
            [value]="value"
            [checked]="value === selected()"
            (change)="handleChange($event)"
            [style.margin]="0"
          />
          {{ value }}
        </div>
      }
    </div>
  `,

})
export class InputRadioComponent<Type> {
  public values = input<Type[]>([]);
  public selected = input<Type>();
  public onChange = output<Type>();

  protected handleChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.onChange.emit(input.value as Type);
  }
}
