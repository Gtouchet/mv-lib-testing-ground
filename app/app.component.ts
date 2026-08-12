import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import {
  MV_LIB_EFFECTS,
  MvLibDropdownClassicComponent,
  MvLibDropdownClassicEffects,
  MvLibDropdownClassicSettings,
  MvLibDropdownClassicStyle,
  MvLibDropdownDirectives,
  MvLibThemeService,
  MvLibToastClassicComponent,
} from 'mv-lib';
import { CommonModule } from '@angular/common';

interface ComponentTreeview {
  name: string;
  icon: string;
  selected?: ComponentItem;
  items: ComponentItem[];
}

interface ComponentItem {
  type: string;
  routerLink?: string;
  wip?: boolean;
}

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MvLibDropdownClassicComponent,
    MvLibDropdownDirectives,
    MvLibToastClassicComponent,
    CommonModule,
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

  protected componentDropdowns = signal<ComponentTreeview[]>([
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
      name: 'Treeview',
      icon: 'folder_data',
      selected: undefined,
      items: [
        { type: 'Classic', routerLink: '/treeview-classic-example', wip: true },
      ],
    },
  ]);

  protected serviceDropdowns = signal<ComponentTreeview[]>([
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
        width: '100%',
        height: '32px',
      },
    },
    item: {
      height: '28px',
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

  protected dropdownsSettings: Partial<MvLibDropdownClassicSettings> = {
    list: {
      offsetX: '25%',
    },
  };

  protected onItemSelect(item: ComponentItem, dropdownName: string): void {
    this.componentDropdowns.update((dropdowns) =>
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
