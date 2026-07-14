import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input-checkbox',
  standalone: true,
  imports: [NgTemplateOutlet],
  template: `
    <ng-template #inputCheckboxTemplate>
      <input
        type="checkbox"
        [name]="id()"
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
  public id = input<number>();
  public checked = input(false);
  public label = input('');
  public toggled = output<boolean>();

  protected onToggle(event: Event) {
    this.toggled.emit((event.target as HTMLInputElement).checked);
  }
}
