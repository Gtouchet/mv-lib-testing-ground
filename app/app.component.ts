import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import {
  MV_LIB_EFFECTS,
  MvLibButtonClassicComponent,
  MvLibDropdownClassicComponent,
  MvLibDropdownClassicEffects,
  MvLibDropdownClassicStyle,
  MvLibDropdownDirectives,
  MvLibToastClassicComponent,
} from 'mv-lib';
import { StylesService } from './styles/styles.service';

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
  protected titleService = inject(Title);

  constructor() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.updateDocumentTitle());

    this.updateDocumentTitle();
  }

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
        { type: 'Classic', routerLink: '/dropdown-classic-example', wip: true },
      ],
    },
    { 
      name: 'Radio buttons',
      icon: 'radio_button_checked',
      selected: undefined,
      items: [
        { type: 'Classic', routerLink: '/radio-buttons-classic-example' },
      ],
    },
    { 
      name: 'Switches',
      icon: 'switches', 
      selected: undefined,
      items: [
        { type: 'Classic', routerLink: '/switch-classic-example' },
        // { type: 'Lite', routerLink: '/switch-lite-example', wip: true },
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
        { type: 'Classic', routerLink: '/toast-classic-example', wip: true },
      ],
    },
  ]);

  protected dropdownsStyles: Partial<MvLibDropdownClassicStyle> = {
    button: {
      backgroundColor: this.appStyles.var('dropdown-classic-button-background-color'),
      dimensions: {
        width: '175px',
        height: '32px',
      },
      font: {
        color: this.appStyles.var('dropdown-classic-button-text-color'),
      },
    },
    item: {
      backgroundColor: this.appStyles.var('dropdown-classic-item-background-color'),
      height: '32px',
      font: {
        color: this.appStyles.var('dropdown-classic-item-text-color'),
      },
    },
  };

  protected dropdownsEffects: Partial<MvLibDropdownClassicEffects> = {
    button: {
      classes: [
        MV_LIB_EFFECTS.idle.shadow.class,
        MV_LIB_EFFECTS.hover.tint.class,
        MV_LIB_EFFECTS.click.push.class,
      ],
    },
    list: {
      classes: [
        MV_LIB_EFFECTS.idle.shadow.class,
      ],
    },
    item: {
      classes: [
        MV_LIB_EFFECTS.hover.tint.class,
      ],
    },
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

  private updateDocumentTitle(): void {
    let route = this.router.routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const title = route?.snapshot?.data['title'] ?? 'Home';
    this.titleService.setTitle(`MV Lib - ${title}`);
  }
}
