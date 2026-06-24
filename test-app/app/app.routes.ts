import { Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '' },
	{ path: 'buttons', component: ButtonsComponent },
];
