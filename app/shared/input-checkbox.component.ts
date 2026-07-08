import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input-checkbox',
  standalone: true,
  imports: [NgTemplateOutlet],
  template: `
    <ng-template #inputCheckboxTemplate>
      <div class="effect-checkbox">
        <div>
          <input
            type="checkbox"
            [checked]="checked()"
            (click)="toggled.emit($event)"
          />
          {{ label() }}
        </div>
      </div>
    </ng-template>

    <ng-container
      [ngTemplateOutlet]="inputCheckboxTemplate"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputCheckboxComponent {
  public checked = input(false);
  public label = input('');
  public toggled = output<MouseEvent>();
}
