import { Component, signal } from '@angular/core';
import { MvLibButtonComponent } from '../../../mv-lib/components';

@Component({
  selector: 'app-buttons-test',
  imports: [MvLibButtonComponent],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  protected disabled = signal(false);
}
