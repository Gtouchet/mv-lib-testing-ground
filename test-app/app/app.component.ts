import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MvLibButtonComponent } from '../../mv-lib/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MvLibButtonComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
