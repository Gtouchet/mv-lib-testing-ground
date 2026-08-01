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
        'color': color(),
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
  public color = input<string | undefined>(undefined);
  public onClick = output<Event>();

  protected handleClick(event: Event) {
    this.onClick.emit(event);
  }
}
