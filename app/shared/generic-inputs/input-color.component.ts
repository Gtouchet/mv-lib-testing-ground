import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input-color',
  standalone: true,
  template: `
    <input
      type="color"
      [value]="value()"
      (input)="handleInput($event)"
      [style.width.px]="58"
      [style.height.px]="24"
    />
    {{ label() }}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputColorComponent {
  public value = input<string | undefined>(undefined);
  public label = input('');
  public onChange = output<string>();

  protected handleInput(event: Event) {
      const input = event.target as HTMLInputElement;
      this.onChange.emit(input.value);
  }
}
