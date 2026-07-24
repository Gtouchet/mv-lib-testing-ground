import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-input-select',
  standalone: true,
  template: `
    <div
        [style.display]="'flex'"
        [style.flexDirection]="'column'"
    >
        <b>
          {{ label() }}
        </b>
        <select
          [style.width.px]="widthPx()"
          [style.height.px]="heightPx()"
          (change)="handleChange($event)"
        >
          @for (value of values(); track value) {
            <option
                [value]="value"
                [selected]="selectedValues().includes(value)"
              >
              {{ value }}
            </option>
          }
        </select>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputSelectComponent {
  public label = input('');
  public values = input.required<string[]>();
  public selectedValues = input<any>([]);
  public widthPx = input<number | undefined>(undefined);
  public heightPx = input<number | undefined>(undefined);
  public onChange = output<string>();

  protected handleChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.onChange.emit(target.value);
  }
}