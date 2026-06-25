import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MvLibButtonComponent } from '../../mv-lib/components';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    MvLibButtonComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class AppComponent {
  
}
