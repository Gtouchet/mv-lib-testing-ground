import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input-checkbox',
  styleUrl: './generic-input.component.scss',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <div
      [ngStyle]="{
        'display': 'inline-flex',
        'align-items': 'center',
        'gap.px': 6,
        'margin-bottom.px': -2,
      }"
    >
      <input
        type="checkbox"
        [checked]="checked()"
        (click)="handleClick($event)"
        [style.margin]="0"
      />

      <span [style.line-height]="1">
        {{ label() }}
      </span>
    </div>
  `,
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
