import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ButtonClassicExampleComponent } from './examples/buttons/classic/button-classic-example.component';
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

export interface AppRoute {
	readonly path: string;
	readonly fragment?: string;
	readonly title: string;
	readonly component: any;
}

export const appRoutes = {
	Home: {
		path: 'home',
		title: 'Home',
		component: HomeComponent,
	},

	ButtonClassic: {
		path: 'button-classic-example',
		title: 'Button classic',
		component: ButtonClassicExampleComponent,
	},
	CheckboxClassic: {
		path: 'checkbox-classic-example',
		title: 'Checkbox classic',
		component: CheckboxClassicExampleComponent,
	},
	DropdownClassic: {
		path: 'dropdown-classic-example',
		title: 'Dropdown classic',
		component: DropdownClassicExampleComponent,
	},
	GridClassic: {
		path: 'grid-classic-example',
		title: 'Grid classic',
		component: GridClassicExampleComponent,
	},
	RadioButtonsClassic: {
		path: 'radio-buttons-classic-example',
		title: 'Radio buttons classic',
		component: RadioButtonsClassicExampleComponent,
	},
	SwitchClassic: {
		path: 'switch-classic-example',
		title: 'Switch classic',
		component: SwitchClassicExampleComponent,
	},
	TextboxAlphanumeric: {
		path: 'textbox/alphanumeric',
		title: 'Alphanumeric Textbox',
		component: AlphanumericTextboxComponent,
	},

	// Numeric textbox
	TextboxNumericOverview: {
		path: 'textbox/numeric/overview',
		title: 'Numeric Textbox Overview',
		component: NumericTextboxOverviewComponent,
	},
	TextboxNumericStyle: {
		path: 'textbox/numeric/style',
		fragment: 'top',
		title: 'Numeric Textbox Style',
		component: NumericTextboxStyleComponent,
	},
	TextboxNumericEffects: {
		path: 'textbox/numeric/effects',
		fragment: 'top',
		title: 'Numeric Textbox Effects',
		component: NumericTextboxEffectsComponent,
	},
	TextboxNumericSettings: {
		path: 'textbox/numeric/settings',
		fragment: 'top',
		title: 'Numeric Textbox Settings',
		component: NumericTextboxSettingsComponent,
	},
	TextboxNumericForm: {
		path: 'textbox/numeric/form',
		fragment: 'top',
		title: 'Numeric Textbox Form',
		component: NumericTextboxFormComponent,
	},
	TextboxNumericEvents: {
		path: 'textbox/numeric/events',
		fragment: 'top',
		title: 'Numeric Textbox Events',
		component: NumericTextboxEventsComponent,
	},

	TreeviewClassic: {
		path: 'treeview-classic-example',
		title: 'Treeview classic',
		component: TreeviewClassicExampleComponent,
	},
	ToastClassic: {
		path: 'toast-classic-example',
		title: 'Toast classic',
		component: ToastClassicExampleComponent,
	},
} as const satisfies Record<string, AppRoute>;

export const routes: Routes = [
	{ 
		path: '',
		pathMatch: 'full',
		redirectTo: appRoutes.Home.path,
	},
	...Object.values(appRoutes).map(route => ({
		path: route.path,
		component: route.component,
		data: { title: route.title },
	})),
];
