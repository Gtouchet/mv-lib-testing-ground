import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input-radio',
  standalone: true,
  imports: [NgTemplateOutlet],
  template: `
    <ng-template #inputRadioTemplate>
      <div
        [style.display]="'flex'"
        [style.flex-direction]="'column'"
        [style.align-items]="'flex-start'"
      >
        @for (value of values(); track $index) {
          <div>
            <input
              type="radio"
              [value]="value"
              [checked]="value == selected()"
              (change)="handleChange($event)"
              [style.margin]="0"
            />
            {{ value }}
          </div>
        }
      </div>
    </ng-template>
    <ng-container
      [ngTemplateOutlet]="inputRadioTemplate"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputRadioComponent<Type> {
  public values = input<Type[]>([]);
  public selected = input<Type>();
  
  readonly onChange = output<Type>();

  protected handleChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.onChange.emit(input.value as Type);
  }
}
