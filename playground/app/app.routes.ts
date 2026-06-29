import { Routes } from '@angular/router';
import { ButtonClassicExampleComponent } from './views/buttons/classic/button-classic-example.component';
import { SwitchClassicExampleComponent } from './views/switches/classic/switch-classic-example.component';
import { DropdownClassicExampleComponent } from './views/dropdowns/classic/dropdown-classic-example.component';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '' },
	{ path: 'button-classic-example', component: ButtonClassicExampleComponent },
	{ path: 'switch-classic-example', component: SwitchClassicExampleComponent },
	{ path: 'dropdown-classic-example', component: DropdownClassicExampleComponent },
];
