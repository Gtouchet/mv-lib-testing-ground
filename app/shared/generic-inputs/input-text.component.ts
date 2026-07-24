import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input-text',
  standalone: true,
  template: `
    <input
      type="text"
      [value]="value()"
      (input)="handleInput($event)"
      [style.width.px]="widthPx()"
      [style.height.px]="16"
    />
    {{ label() }}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTextComponent {
  public value = input<string | number| undefined>(undefined);
  public label = input('');
  public widthPx = input<number | undefined>(undefined);
  public onChange = output<string>();

  protected handleInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.onChange.emit(inputElement.value);
  }
}
