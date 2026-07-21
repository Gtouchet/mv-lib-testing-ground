import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {
  MvLibButtonClassicComponent,
  MvLibDropdownClassicComponent,
  MvLibDropdownClassicEffects,
  MvLibDropdownClassicStyles,
  MvLibDropdownDirectives,
  MvLibToastClassicComponent,
} from 'mv-lib';
import { StylesService } from '../styles/styles.service';

interface Item {
  type: string;
  routerLink?: string;
  wip?: boolean;
}

interface DropdownGroup {
  name: string;
  icon: string;
  selected?: Item;
  items: Item[];
}

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MvLibButtonClassicComponent,
    MvLibDropdownClassicComponent,
    MvLibDropdownDirectives,
    MvLibToastClassicComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class AppComponent {
  
  protected router = inject(Router);
  protected appStyles = inject(StylesService);

  protected dropdowns = signal<DropdownGroup[]>([
    {
      name: 'Buttons',
      icon: 'trackpad_input',
      selected: undefined,
      items: [
        { type: 'Classic', routerLink: '/button-classic-example' },
      ],
    },
    { 
      name: 'Dropdowns',
      icon: 'dropdown_menu',
      selected: undefined,
      items: [
        { type: 'Classic', routerLink: '/dropdown-classic-example' },
      ],
    },
    { 
      name: 'Radio buttons',
      icon: 'radio',
      selected: undefined,
      items: [
        { type: 'Classic', routerLink: '/radio-buttons-classic-example', wip: true },
      ],
    },
    { 
      name: 'Switches',
      icon: 'switches', 
      selected: undefined,
      items: [
        { type: 'Classic', routerLink: '/switch-classic-example' },
        { type: 'Lite', routerLink: '/switch-lite-example' },
      ],
    },
    { 
      name: 'Textboxes',
      icon: 'crop_16_9',
      selected: undefined,
      items: [
        { type: 'Classic', routerLink: '/textbox-classic-example' },
      ],
    },
    {
      name: 'Toasts',
      icon: 'notifications',
      selected: undefined,
      items: [
        { type: 'Classic', routerLink: '/toast-classic-example' },
      ],
    },
  ]);

  protected dropdownsStyles: Partial<MvLibDropdownClassicStyles> = {
    buttonWidthPx: 175,
    buttonHeightPx: 32,
    itemHeightPx: 32,
    listMaxHeightPx: 150,
    buttonBackgroundColor: this.appStyles.var('dropdown-classic-button-background-color'),
    buttonTextColor: this.appStyles.var('dropdown-classic-button-text-color'),
    itemBackgroundColor: this.appStyles.var('dropdown-classic-item-background-color'),
    itemTextColor: this.appStyles.var('dropdown-classic-item-text-color'),
  };
  protected dropdownsEffects: Partial<MvLibDropdownClassicEffects> = {
    buttonIdle: ['shadow'],
    buttonHover: ['darken'],
    itemHover: ['darken'],
  };

  protected onItemSelect(item: Item, dropdownName: string): void {
    this.dropdowns.update((dropdowns) =>
      dropdowns.map((dropdown) => ({
        ...dropdown,
        selected: dropdown.name === dropdownName ? item : undefined,
      })),
    );
    if (item.routerLink) {
      this.router.navigateByUrl(item.routerLink);
    }
  }
}
