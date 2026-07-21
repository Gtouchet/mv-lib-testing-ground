import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input-button',
  standalone: true,
  template: `
    <button 
    (click)="handleClick($event)"
    >
      {{ label() }}
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputButtonComponent {
  public label = input('');
  public onClick = output<Event>();

  protected handleClick(event: Event) {
    this.onClick.emit(event);
  }
}
