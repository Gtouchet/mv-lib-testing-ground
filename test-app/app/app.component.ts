import { Component, signal } from '@angular/core';
import { MvLibButtonComponent } from '../../mv-lib/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MvLibButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected disabled = signal(false);
}
