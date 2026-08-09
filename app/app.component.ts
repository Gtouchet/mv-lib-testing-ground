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
  MvLibThemeService,
  MvLibToastClassicComponent,
} from 'mv-lib';

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

  protected mvLibEffects = MV_LIB_EFFECTS;
  
  protected router = inject(Router);
  protected titleService = inject(Title);
  protected themeService = inject(MvLibThemeService);

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
        { type: 'Classic', routerLink: '/dropdown-classic-example' },
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
        { type: 'Classic', routerLink: '/toast-classic-example' },
      ],
    },
  ]);

  protected dropdownsStyles: Partial<MvLibDropdownClassicStyle> = {
    button: {
      dimensions: {
        width: '175px',
        height: '32px',
      },
    },
    item: {
      height: '32px',
    },
  };

  protected dropdownsEffects: Partial<MvLibDropdownClassicEffects> = {
    button: {
      classes: [
        this.mvLibEffects.idle.shadow.class,
        this.mvLibEffects.hover.tint.class,
        this.mvLibEffects.click.push.class,
      ],
    },
    list: {
      classes: [
        this.mvLibEffects.idle.shadow.class,
      ],
    },
    item: {
      classes: [
        this.mvLibEffects.hover.tint.class,
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
