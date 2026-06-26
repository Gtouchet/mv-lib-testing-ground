import { Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { SwitchesComponent } from './switchs/switches.component';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '' },
	{ path: 'buttons', component: ButtonsComponent },
	{ path: 'switches', component: SwitchesComponent },
];
