import { Component, signal } from '@angular/core';
import { MvLibButtonClickEvent, MvLibButtonComponent } from '../../../mv-lib/components';

@Component({
  selector: 'app-buttons-test',
  imports: [MvLibButtonComponent],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {

  protected disabled = signal(false);
  protected log = signal('Click on a button to see the onClick event');
  protected logColor = signal('black');

  protected setLog(event: MvLibButtonClickEvent) {
    const settings = event.buttonSettings;
    this.log.set(`${new Date().toLocaleTimeString()} - Button settings ${JSON.stringify(settings)}`);
    this.logColor.set(event.buttonSettings.backgroundColor ?? 'black');
  }
}
