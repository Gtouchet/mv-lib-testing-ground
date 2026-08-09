import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-button',
  styleUrl: './generic-input.component.scss',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <button 
      class="button"
      [class.selected]="selected()"
      [ngStyle]="{
        'width': width(),
        'border': '1px solid var(--mv-lib-primary-color-5)',
        'border-radius': '4px',
        'height.px': 23,
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
  public selected = input<boolean>(false);
  public onClick = output<Event>();

  protected handleClick(event: Event) {
    this.onClick.emit(event);
  }
}
