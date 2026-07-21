import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input-checkbox',
  standalone: true,
  template: `
    <input
      type="checkbox"
      [checked]="checked()"
      (click)="handleClick($event)"
      [style.margin]="0"
    />
    {{ label() }}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputCheckboxComponent {
  public checked = input<boolean | undefined>(undefined);
  public label = input('');
  public onChange = output<boolean>();

  protected handleClick(event: Event) {
    const input = event.target as HTMLInputElement;
    this.onChange.emit(input.checked);
  }
}
