import { ChangeDetectionStrategy, Component, inject, model, signal, viewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import {
  MV_LIB_EFFECTS,
  MvLibButtonComponent,
  MvLibButtonEffects,
  MvLibButtonStyle,
  MvLibSwitchClassicComponent,
  MvLibSwitchClassicEffects,
  MvLibSwitchClassicStyle,
  MvLibSwitchToggleEvent,
  MvLibThemeDefinition,
  MvLibThemeService,
  MvLibToastClassicComponent,
  MvLibTreeviewClassicComponent,
  MvLibTreeviewDirectives,
} from 'mv-lib';
import { CommonModule, DOCUMENT, Location } from '@angular/common';
import { APP_ROUTES } from './app.routes';

interface TreeviewNode {
  type: 'text' | 'button';
  label: string;
  icon?: string;
  routerLink?: string;
  fragment?: string;
  children?: TreeviewNode[];
}

@Component({
  selector: 'app-root',
  imports: [
    MvLibSwitchClassicComponent,
    MvLibTreeviewClassicComponent,
    MvLibTreeviewDirectives,
    MvLibButtonComponent,
    MvLibToastClassicComponent,
    RouterOutlet,
    CommonModule,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class AppComponent {

  protected router = inject(Router);
  protected titleService = inject(Title);
  protected themeService = inject(MvLibThemeService);
  private document = inject(DOCUMENT);
  private location = inject(Location);

  private componentsTreeview = viewChild.required<MvLibTreeviewClassicComponent<TreeviewNode>>('componentsTreeview');
  private servicesTreeview = viewChild.required<MvLibTreeviewClassicComponent<TreeviewNode>>('servicesTreeview');

  private mvLibEffects = MV_LIB_EFFECTS;

  constructor() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(event => {
        this.updateDocumentTitle();
        this.expandActiveNavigationPath(event.urlAfterRedirects);
      });
    this.isThemeModeLight.set(this.themeService.currentTheme()!.mode === 'light');
  }

  /**
   * Components links
   */
  protected componentTreeviewItems = signal<TreeviewNode[]>([
    this.buttonsTreeviewItem(),
    this.cardsTreeviewItem(),
    this.checkboxesTreeviewItem(),
    this.dropdownsTreeviewItem(),
    this.gridsTreeviewItem(),
    this.radioButtonsTreeviewItem(),
    this.switchesTreeviewItem(),
    this.textboxesTreeviewItem(),
    this.treeviewsTreeviewItem(),
  ]);

  /**
   * Treeview items - Components
   */
  private buttonsTreeviewItem(): TreeviewNode {
    return {
      type: 'text',
      label: 'Buttons',
      icon: 'trackpad_input',
      children: [
        {
          type: 'text',
          label: 'Button',
          children: [
            {
              type: 'button',
              label: 'Overview',
              routerLink: `/${APP_ROUTES.buttonOverview.path}`,
            },
            {
              type: 'button',
              label: 'Style',
              routerLink: `/${APP_ROUTES.buttonStyle.path}`,
            },
            {
              type: 'button',
              label: 'Effects',
              routerLink: `/${APP_ROUTES.buttonEffects.path}`,
            },
            {
              type: 'button',
              label: 'HREF',
              routerLink: `/${APP_ROUTES.buttonHref.path}`,
            },
          ],
        },
      ],
    };
  }

  private cardsTreeviewItem(): TreeviewNode {
    return {
      type: 'text',
      label: 'Cards',
      icon: 'crop_landscape',
      children: [
        {
          type: 'text',
          label: 'Card',
          children: [
            {
              type: 'button',
              label: 'Style',
              routerLink: `/${APP_ROUTES.cardStyle.path}`,
            },
          ],
        },
      ],
    };
  }

  private checkboxesTreeviewItem(): TreeviewNode {
    return {
      type: 'text',
      label: 'Checkboxes',
      icon: 'check_box',
      children: [
        {
          type: 'text',
          label: 'Checkbox',
          children: [
            {
              type: 'button',
              label: 'Overview',
              routerLink: `/${APP_ROUTES.checkboxOverview.path}`,
            },
          ],
        },
      ],
    };
  }

  private dropdownsTreeviewItem(): TreeviewNode {
    return {
      type: 'text',
      label: 'Dropdowns',
      icon: 'dropdown_menu',
      children: [
        {
          type: 'button',
          label: 'Classic',
          routerLink: `/${APP_ROUTES.dropdownClassic.path}`,
        },
      ],
    };
  }

  private gridsTreeviewItem(): TreeviewNode {
    return {
      type: 'text',
      label: 'Grids',
      icon: 'table_rows',
      children: [
        {
          type: 'button',
          label: 'Classic',
          routerLink: `/${APP_ROUTES.gridClassic.path}`,
        },
      ],
    };
  }

  private radioButtonsTreeviewItem(): TreeviewNode {
    return {
      type: 'text',
      label: 'Radio buttons',
      icon: 'radio_button_checked',
      children: [
        {
          type: 'button',
          label: 'Classic',
          routerLink: `/${APP_ROUTES.radioButtonsClassic.path}`,
        },
      ],
    };
  }

  private switchesTreeviewItem(): TreeviewNode {
    return {
      type: 'text',
      label: 'Switches',
      icon: 'switches',
      children: [
        {
          type: 'button',
          label: 'Classic',
          routerLink: `/${APP_ROUTES.switchClassic.path}`,
        },
      ],
    };
  }

  private textboxesTreeviewItem(): TreeviewNode {
    return {
      type: 'text',
      label: 'Textboxes',
      icon: 'crop_16_9',
      children: [
        {
          type: 'text',
          label: 'Alphanumeric',
          children: [
            {
              type: 'button',
              label: 'General',
              routerLink: `/${APP_ROUTES.textboxAlphanumeric.path}`,
            },
          ],
        },
        {
          type: 'text',
          label: 'Numeric',
          children: [
            {
              type: 'button',
              label: 'Overview',
              routerLink: `/${APP_ROUTES.textboxNumericOverview.path}`,
            },
            {
              type: 'button',
              label: 'Style',
              routerLink: `/${APP_ROUTES.textboxNumericStyle.path}`,
              fragment: APP_ROUTES.textboxNumericStyle.fragment,
            },
            {
              type: 'button',
              label: 'Effects',
              routerLink: `/${APP_ROUTES.textboxNumericEffects.path}`,
              fragment: APP_ROUTES.textboxNumericEffects.fragment,
            },
            {
              type: 'button',
              label: 'Settings',
              routerLink: `/${APP_ROUTES.textboxNumericSettings.path}`,
              fragment: APP_ROUTES.textboxNumericSettings.fragment,
            },
            {
              type: 'button',
              label: 'Form',
              routerLink: `/${APP_ROUTES.textboxNumericForm.path}`,
              fragment: APP_ROUTES.textboxNumericForm.fragment,
            },
            {
              type: 'button',
              label: 'Events',
              routerLink: `/${APP_ROUTES.textboxNumericEvents.path}`,
              fragment: APP_ROUTES.textboxNumericEvents.fragment,
            },
          ],
        },
      ],
    };
  }

  private treeviewsTreeviewItem(): TreeviewNode {
    return {
      type: 'text',
      label: 'Treeviews',
      icon: 'folder_data',
      children: [
        {
          type: 'button',
          label: 'Classic',
          routerLink: `/${APP_ROUTES.treeviewClassic.path}`,
        },
      ],
    };
  }

  /**
   * Treeview items - Services
   */
  private toastsTreeviewItem(): TreeviewNode {
    return {
      type: 'text',
      label: 'Toasts',
      icon: 'notifications',
      children: [
        {
          type: 'button',
          label: 'Classic',
          routerLink: `/${APP_ROUTES.toastClassic.path}`,
        },
      ],
    };
  }

  /**
   * Treeview items - Themes
   */
  private themeModeTreeviewItem(mode: MvLibThemeDefinition['mode'], label: string, icon: string): TreeviewNode {
    return {
      type: 'text',
      label,
      icon,
      children: this.themeService.getThemes()
        .filter(theme => theme.mode === mode)
        .map((theme: MvLibThemeDefinition): TreeviewNode => ({
          type: 'button',
          label: theme.name,
        })),
    };
  }

  /**
   * Services links
   */
  protected serviceTreeviewItems = signal<TreeviewNode[]>([
    this.toastsTreeviewItem(),
  ]);

  /**
   * Themes links
   */
  protected themeTreeviewItems = signal<TreeviewNode[]>([
    this.themeModeTreeviewItem('light', 'Light', 'light_mode'),
    this.themeModeTreeviewItem('dark', 'Dark', 'dark_mode'),
  ]);

  /**
   * Style, effects
   */
  protected switchStyle: Partial<MvLibSwitchClassicStyle> = {
    track: {
      colorOff: 'var(--mv-lib-component-background-color-secondary)',
    },
    cursor: {
      colorOff: 'var(--mv-lib-component-background-color-primary)',
      iconOn: 'light_mode',
      iconOff: 'dark_mode',
    },
  };

  protected switchEffects: Partial<MvLibSwitchClassicEffects> = {
    track: {
      classes: [
        this.mvLibEffects.idle.shadow.class,
      ],
    },
    cursor: {
      classes: [
        this.mvLibEffects.hover.resize.class,
      ],
    },
  };

  protected treeviewButtonStyle: Partial<MvLibButtonStyle> = {
    dimensions: {
      width: '100%',
      height: '26px',
    },
  };

  protected treeviewButtonEffects: Partial<MvLibButtonEffects> = {
    classes: [
      this.mvLibEffects.hover.tint.class,
      this.mvLibEffects.click.push.class,
    ],
  };

  /**
   * Themes
   */
  protected isThemeModeLight = model<boolean>(false);

  protected toggleTheme(event: MvLibSwitchToggleEvent) {
    this.themeService.setTheme(event.active ? 'Light' : 'Dark');
  }

  protected onThemeSelect(themeName?: string, event?: Event): void {
    event?.stopPropagation();
    if (!themeName) {
      return;
    }
    this.themeService
      .setTheme(themeName)
      .then(() => {
        this.isThemeModeLight.set(this.themeService.currentTheme()!.mode === 'light');
      });
  }

  /**
   * Navigation
   */
  protected onNavigationItemClick(item: TreeviewNode, event: Event): void {
    if (!(event instanceof MouseEvent)
      || event.button !== 0
      || event.ctrlKey
      || event.metaKey
      || event.shiftKey
      || event.altKey) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    if (!item.routerLink) {
      return;
    }
    void this.router.navigate([item.routerLink], { fragment: item.fragment })
      .then(navigated => {
        if (navigated && item.fragment) {
          this.document.getElementById(item.fragment)?.scrollIntoView({ block: 'start' });
        }
      });
  }

  protected getNavigationHref(item: TreeviewNode): string {
    const url = this.router.serializeUrl(
      this.router.createUrlTree([item.routerLink], { fragment: item.fragment }),
    );
    return this.location.prepareExternalUrl(url);
  }

  private expandActiveNavigationPath(url: string): void {
    const activePath = url.split(/[?#]/)[0];
    this.componentsTreeview().api.expandItems(item => item.routerLink === activePath);
    this.servicesTreeview().api.expandItems(item => item.routerLink === activePath);
  }

  private updateDocumentTitle(): void {
    let route = this.router.routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const title = route?.snapshot?.data['title'] ?? 'Home';
    this.titleService.setTitle(title);
  }
}
