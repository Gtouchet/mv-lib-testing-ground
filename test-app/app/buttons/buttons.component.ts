import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MvLibButtonClickEvent, MvLibButtonComponent } from '../../../mv-lib/components';
import { StylesService } from '../../styles/styles.service';

@Component({
  selector: 'app-buttons-test',
  imports: [MvLibButtonComponent],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ButtonsComponent {

  protected styles = inject(StylesService);

  protected disabled = signal(false);
  protected log = signal('Click on a button to see the button\'s settings');

  protected setLog(event: MvLibButtonClickEvent) {
    this.log.set(`Button clicked at ${new Date().toLocaleTimeString()}\n${JSON.stringify(event.settings, null, 4)}`);
  }
}
