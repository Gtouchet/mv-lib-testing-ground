import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

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
          (change)="handleChange($event)"
          [style.width.px]="width()"
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
  public width = input<number | undefined>(undefined);
  public onChange = output<string>();

  protected handleChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.onChange.emit(target.value);
  }
}