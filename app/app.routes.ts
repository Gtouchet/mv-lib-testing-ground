import { Routes } from '@angular/router';
import { ToastClassicExampleComponent } from './views/toasts/classic/toast-classic-example.component';

import { ButtonClassicExampleComponent } from './views/buttons/classic/button-classic-example.component';

import { DropdownClassicExampleComponent } from './views/dropdowns/classic/dropdown-classic-example.component';

import { SwitchClassicExampleComponent } from './views/switches/classic/switch-classic-example.component';
import { SwitchLiteExampleComponent } from './views/switches/lite/switch-lite-example.component';

import { TextboxClassicExampleComponent } from './views/textboxes/classic/textbox-classic-example.component';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '' },

	{ path: 'button-classic-example', component: ButtonClassicExampleComponent },

	{ path: 'dropdown-classic-example', component: DropdownClassicExampleComponent },

	{ path: 'switch-classic-example', component: SwitchClassicExampleComponent },
	{ path: 'switch-lite-example', component: SwitchLiteExampleComponent },

	{ path: 'textbox-classic-example', component: TextboxClassicExampleComponent },

	{ path: 'toast-classic-example', component: ToastClassicExampleComponent },
];
