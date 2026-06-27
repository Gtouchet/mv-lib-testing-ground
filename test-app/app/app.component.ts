import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MvLibButtonClassicComponent } from 'mv-lib';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    MvLibButtonClassicComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class AppComponent {
  
}
