import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input-number',
  standalone: true,
  imports: [NgTemplateOutlet],
  template: `
    <ng-template #inputNumberTemplate>
      <div class="effect-checkbox">
        <div>
          <input
            type="number"
            [value]="value()"
            (input)="valueChanged.emit($event)"
          />
          {{ label() }}
        </div>
      </div>
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
  public valueChanged = output<Event>();
}
