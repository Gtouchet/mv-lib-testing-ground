import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input-color',
  standalone: true,
  imports: [NgTemplateOutlet],
  template: `
    <ng-template #inputColorTemplate>
      <input
        type="color"
        [value]="value()"
        (input)="valueChanged.emit($event)"
        [style.width.px]="58"
        [style.height.px]="24"
      />
      {{ label() }}
    </ng-template>
    <ng-container
      [ngTemplateOutlet]="inputColorTemplate"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputColorComponent {
  public value = input<string | undefined>(undefined);
  public label = input('');
  public valueChanged = output<Event>();
}
