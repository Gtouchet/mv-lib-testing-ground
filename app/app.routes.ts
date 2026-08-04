import { Routes } from '@angular/router';
import { ButtonClassicExampleComponent } from './examples/buttons/classic/button-classic-example.component';
import { DropdownClassicExampleComponent } from './examples/dropdowns/classic/dropdown-classic-example.component';
import { RadioButtonsClassicExampleComponent } from './examples/radio-buttons/classic/radio-buttons-classic-example.component';
import { SwitchClassicExampleComponent } from './examples/switches/classic/switch-classic-example.component';
import { SwitchLiteExampleComponent } from './examples/switches/lite/switch-lite-example.component';
import { TextboxClassicExampleComponent } from './examples/textboxes/classic/textbox-classic-example.component';
import { ToastClassicExampleComponent } from './examples/toasts/classic/toast-classic-example.component';
import { HomeComponent } from './home.component';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/home' },
	{ path: 'home', component: HomeComponent, data: { title: 'Home' } },
	{ path: 'button-classic-example', component: ButtonClassicExampleComponent, data: { title: 'Button classic' } },
	{ path: 'dropdown-classic-example', component: DropdownClassicExampleComponent, data: { title: 'Dropdown classic' } },
	{ path: 'radio-buttons-classic-example', component: RadioButtonsClassicExampleComponent, data: { title: 'Radio buttons classic' } },
	{ path: 'switch-classic-example', component: SwitchClassicExampleComponent, data: { title: 'Switch classic' } },
	{ path: 'switch-lite-example', component: SwitchLiteExampleComponent, data: { title: 'Switch lite' } },
	{ path: 'textbox-classic-example', component: TextboxClassicExampleComponent, data: { title: 'Textbox classic' } },
	{ path: 'toast-classic-example', component: ToastClassicExampleComponent, data: { title: 'Toast classic' } },
];
