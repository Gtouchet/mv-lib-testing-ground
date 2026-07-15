import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [NgTemplateOutlet],
  template: `
    <ng-template #inputTextTemplate>
      <input
        type="text"
        [value]="value()"
        (input)="handleInput($event)"
        [style.width.px]="widthPx()"
        [style.height.px]="16"
      />
      {{ label() }}
    </ng-template>
    <ng-container
      [ngTemplateOutlet]="inputTextTemplate"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTextComponent {
  public value = input<string | undefined>(undefined);
  public label = input('');
  public widthPx = input<number>(50);
  public onChange = output<string>();

  protected handleInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.onChange.emit(inputElement.value);
  }
}
