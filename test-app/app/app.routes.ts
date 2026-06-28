import { Routes } from '@angular/router';
import { ButtonClassicExampleComponent } from './test-views/buttons/classic/button-classic-example.component';
import { SwitchClassicExampleComponent } from './test-views/switches/classic/switch-classic-example.component';
import { DropDownListClassicExampleComponent } from './test-views/drop-down-lists/classic/drop-down-list-classic-example.component';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '' },
	{ path: 'button-classic-example', component: ButtonClassicExampleComponent },
	{ path: 'switch-classic-example', component: SwitchClassicExampleComponent },
	{ path: 'drop-down-list-classic-example', component: DropDownListClassicExampleComponent },
];
