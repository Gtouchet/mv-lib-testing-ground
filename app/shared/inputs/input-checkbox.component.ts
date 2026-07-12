import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-input-checkbox',
  standalone: true,
  imports: [NgTemplateOutlet],
  template: `
    <ng-template #inputCheckboxTemplate>
      <input
        type="checkbox"
        [checked]="checked()"
        (click)="onToggle($event)"
        [style.margin]="0"
      />
      {{ label() }}
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
  public toggled = output<boolean>();

  protected onToggle(event: Event) {
    this.toggled.emit((event.target as HTMLInputElement).checked);
  }
}
