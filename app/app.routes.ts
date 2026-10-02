import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ButtonOverviewComponent } from './examples/buttons/button/overview/button-overview.component';
import { CheckboxClassicExampleComponent } from './examples/checkboxes/classic/checkbox-classic-example.component';
import { DropdownClassicExampleComponent } from './examples/dropdowns/classic/dropdown-classic-example.component';
import { GridClassicExampleComponent } from './examples/grids/classic/grid-classic-example.component';
import { RadioButtonsClassicExampleComponent } from './examples/radio-buttons/classic/radio-buttons-classic-example.component';
import { SwitchClassicExampleComponent } from './examples/switches/classic/switch-classic-example.component';
import { AlphanumericTextboxComponent } from './examples/textboxes/alphanumeric/alphanumeric-textbox.component';
import { NumericTextboxOverviewComponent } from './examples/textboxes/numeric/_overview/numeric-textbox-overview.component';
import { TreeviewClassicExampleComponent } from './examples/treeviews/classic/treeview-classic-example.component';
import { ToastClassicExampleComponent } from './examples/toasts/classic/toast-classic-example.component';
import { NumericTextboxStyleComponent } from './examples/textboxes/numeric/style/numeric-textbox-style.component';
import { NumericTextboxEffectsComponent } from './examples/textboxes/numeric/effects/numeric-textbox-effects.components';
import { NumericTextboxSettingsComponent } from './examples/textboxes/numeric/settings/numeric-textbox-settings.component';
import { NumericTextboxFormComponent } from './examples/textboxes/numeric/form/numeric-textbox-form.component';
import { NumericTextboxEventsComponent } from './examples/textboxes/numeric/events/numeric-textbox-events.component';
import { ButtonStyleComponent } from './examples/buttons/button/style/button-style.component';
import { ButtonHrefComponent } from './examples/buttons/button/href/button-href.component';

export interface AppRoute {
	readonly path: string;
	readonly fragment?: string;
	readonly title: string;
	readonly component: any;
}

export const APP_ROUTES = {
	home: {
		path: 'home',
		title: 'Home',
		component: HomeComponent,
	},

	/**
	 * Button
	 */
	buttonOverview: {
		path: 'buttons/button/overview',
		title: 'Button - Overview',
		component: ButtonOverviewComponent,
	},
	buttonStyle: {
		path: 'buttons/button/style',
		title: 'Button - Style',
		component: ButtonStyleComponent,
	},
	buttonHref: {
		path: 'buttons/button/href',
		title: 'Button - HREF',
		component: ButtonHrefComponent,
	},

	CheckboxClassic: {
		path: 'checkbox-classic-example',
		title: 'Checkbox classic',
		component: CheckboxClassicExampleComponent,
	},
	dropdownClassic: {
		path: 'dropdown-classic-example',
		title: 'Dropdown classic',
		component: DropdownClassicExampleComponent,
	},
	gridClassic: {
		path: 'grid-classic-example',
		title: 'Grid classic',
		component: GridClassicExampleComponent,
	},
	radioButtonsClassic: {
		path: 'radio-buttons-classic-example',
		title: 'Radio buttons classic',
		component: RadioButtonsClassicExampleComponent,
	},
	switchClassic: {
		path: 'switch-classic-example',
		title: 'Switch classic',
		component: SwitchClassicExampleComponent,
	},
	textboxAlphanumeric: {
		path: 'textbox/alphanumeric',
		title: 'Alphanumeric Textbox',
		component: AlphanumericTextboxComponent,
	},

	/**
	 * Numeric textbox
	 */
	textboxNumericOverview: {
		path: 'textboxes/numeric/overview',
		title: 'Numeric Textbox - Overview',
		component: NumericTextboxOverviewComponent,
	},
	textboxNumericStyle: {
		path: 'textboxes/numeric/style',
		fragment: 'top',
		title: 'Numeric Textbox - Style',
		component: NumericTextboxStyleComponent,
	},
	textboxNumericEffects: {
		path: 'textboxes/numeric/effects',
		fragment: 'top',
		title: 'Numeric Textbox - Effects',
		component: NumericTextboxEffectsComponent,
	},
	textboxNumericSettings: {
		path: 'textboxes/numeric/settings',
		fragment: 'top',
		title: 'Numeric Textbox - Settings',
		component: NumericTextboxSettingsComponent,
	},
	textboxNumericForm: {
		path: 'textboxes/numeric/form',
		fragment: 'top',
		title: 'Numeric Textbox - Form',
		component: NumericTextboxFormComponent,
	},
	textboxNumericEvents: {
		path: 'textboxes/numeric/events',
		fragment: 'top',
		title: 'Numeric Textbox - Events',
		component: NumericTextboxEventsComponent,
	},


	treeviewClassic: {
		path: 'treeview-classic-example',
		title: 'Treeview classic',
		component: TreeviewClassicExampleComponent,
	},
	toastClassic: {
		path: 'toast-classic-example',
		title: 'Toast classic',
		component: ToastClassicExampleComponent,
	},
} as const satisfies Record<string, AppRoute>;

export const routes: Routes = [
	{ 
		path: '',
		pathMatch: 'full',
		redirectTo: APP_ROUTES.home.path,
	},
	...Object.values(APP_ROUTES).map(route => ({
		path: route.path,
		component: route.component,
		data: { title: route.title },
	})),
];
