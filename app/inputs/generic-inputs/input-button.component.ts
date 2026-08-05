import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-button',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <button 
      [ngStyle]="{
        'width': width(),
        'background-color': backgroundColor(),
        'color': color(),
        'border': '1px solid black',
        'border-radius': '4px',
      }"
      (click)="handleClick($event)"
    >
      {{ label() }}
    </button>
  `,
})
export class InputButtonComponent {
  public label = input('');
  public width = input<string | undefined>('100%');
  public backgroundColor = input<string | undefined>(undefined);
  public color = input<string | undefined>(undefined);
  public onClick = output<Event>();

  protected handleClick(event: Event) {
    this.onClick.emit(event);
  }
}
