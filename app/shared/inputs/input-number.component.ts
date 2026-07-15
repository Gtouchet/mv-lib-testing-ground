import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input-number',
  standalone: true,
  imports: [NgTemplateOutlet],
  template: `
    <ng-template #inputNumberTemplate>
      <input
        type="number"
        [value]="value()"
        (input)="handleInput($event)"
        [style.width.px]="widthPx()"
        [style.height.px]="16"
      />
      {{ label() }}
    </ng-template>
    <ng-container
      [ngTemplateOutlet]="inputNumberTemplate"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputNumberComponent {
  public value = input<number | undefined>(undefined);
  public label = input('');
  public widthPx = input<number>(50);
  public onChange = output<number>();

  protected handleInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.onChange.emit(input.valueAsNumber);
  }
}
