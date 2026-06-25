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
  protected log = signal('Click on a button to see the onClick event');
  protected logColor = signal('black');

  protected setLog(event: MvLibButtonClickEvent) {
    this.log.set(`${new Date().toLocaleTimeString()} - Button settings ${JSON.stringify(event.buttonSettings)}`);
    this.logColor.set(event.buttonSettings.backgroundColor ?? 'black');
  }
}
