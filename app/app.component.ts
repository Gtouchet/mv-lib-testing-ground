import { ChangeDetectionStrategy, Component, inject, model, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import {
  MV_LIB_EFFECTS,
  MvLibButtonClassicComponent,
  MvLibButtonClassicEffects,
  MvLibButtonClassicStyle,
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
import { CommonModule, DOCUMENT } from '@angular/common';
import { appRoutes } from './app.routes';

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
    MvLibButtonClassicComponent,
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

  private mvLibEffects = MV_LIB_EFFECTS;

  constructor() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.updateDocumentTitle());
    this.isThemeModeLight.set(this.themeService.currentTheme()!.mode === 'light');
  }

  protected themeTreeviewItems = signal<TreeviewNode[]>([
    {
      type: 'text',
      label: 'Light',
      icon: 'light_mode',
      children: [
        ...this.themeService.getThemes()
          .filter(theme => theme.mode === 'light')
          .map((theme: MvLibThemeDefinition) => ({
            type: 'button',
            label: theme.name,
          })),
      ] as TreeviewNode[],
    },
    {
      type: 'text',
      label: 'Dark',
      icon: 'dark_mode',
      children: [
        ...this.themeService.getThemes()
          .filter(theme => theme.mode === 'dark')
          .map((theme: MvLibThemeDefinition) => ({
            type: 'button',
            label: theme.name,
          })),
      ] as TreeviewNode[],
    }
  ]);

  protected componentTreeviewItems = signal<TreeviewNode[]>([
    {
      type: 'text',
      label: 'Buttons',
      icon: 'trackpad_input',
      children: [
        { 
          type: 'button',
          label: 'Classic',
          routerLink: `/${appRoutes.ButtonClassic.path}`,
        },
      ],
    },
    {
      type: 'text',
      label: 'Checkboxes',
      icon: 'check_box',
      children: [
        {
          type: 'button', 
          label: 'Classic', 
          routerLink: `/${appRoutes.CheckboxClassic.path}`,
        },
      ],
    },
    {
      type: 'text',
      label: 'Dropdowns',
      icon: 'dropdown_menu',
      children: [
        {
          type: 'button',
          label: 'Classic',
          routerLink: `/${appRoutes.DropdownClassic.path}`,
        },
      ],
    },
    {
      type: 'text',
      label: 'Grids',
      icon: 'table_rows',
      children: [
        { 
          type: 'button', 
          label: 'Classic', 
          routerLink: `/${appRoutes.GridClassic.path}`,
        },
      ],
    },
    {
      type: 'text',
      label: 'Radio buttons',
      icon: 'radio_button_checked',
      children: [
        { 
          type: 'button',
          label: 'Classic',
          routerLink: `/${appRoutes.RadioButtonsClassic.path}`,
        },
      ],
    },
    {
      type: 'text',
      label: 'Switches',
      icon: 'switches',
      children: [
        { 
          type: 'button',
          label: 'Classic',
          routerLink: `/${appRoutes.SwitchClassic.path}`,
        },
      ],
    },
    {
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
              routerLink: `/${appRoutes.TextboxAlphanumeric.path}`,
            }
          ],
        },
        {
          type: 'text',
          label: 'Numeric',
          children: [
            {
              type: 'button',
              label: 'Overview',
              routerLink: `/${appRoutes.TextboxNumericOverview.path}`,
            },
            {
              type: 'button',
              label: 'Style',
              routerLink: `/${appRoutes.TextboxNumericStyle.path}`,
              fragment: appRoutes.TextboxNumericStyle.fragment,
            },
            {
              type: 'button',
              label: 'Effects',
              routerLink: `/${appRoutes.TextboxNumericEffects.path}`,
              fragment: appRoutes.TextboxNumericEffects.fragment,
            },
            {
              type: 'button',
              label: 'Settings',
              routerLink: `/${appRoutes.TextboxNumericSettings.path}`,
              fragment: appRoutes.TextboxNumericSettings.fragment,
            },
            {
              type: 'button',
              label: 'Form',
              routerLink: `/${appRoutes.TextboxNumericForm.path}`,
              fragment: appRoutes.TextboxNumericForm.fragment,
            },
            {
              type: 'button',
              label: 'Events',
              routerLink: `/${appRoutes.TextboxNumericEvents.path}`,
              fragment: appRoutes.TextboxNumericEvents.fragment,
            },
          ],
        },
      ],
    },
    {
      type: 'text',
      label: 'Treeviews',
      icon: 'folder_data',
      children: [
        { 
          type: 'button',
          label: 'Classic', 
          routerLink: `/${appRoutes.TreeviewClassic.path}`,
        },
      ],
    },
  ]);

  protected serviceTreeviewItems = signal<TreeviewNode[]>([
    {
      type: 'text',
      label: 'Toasts',
      icon: 'notifications',
      children: [
        { 
          type: 'button',
          label: 'Classic', 
          routerLink: `/${appRoutes.ToastClassic.path}`,
        },
      ],
    },
  ]);

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

  protected treeviewButtonEffects: Partial<MvLibButtonClassicEffects> = {
    classes: [
      this.mvLibEffects.hover.tint.class,
      this.mvLibEffects.click.push.class,
    ],
  };

  protected treeviewButtonStyle: Partial<MvLibButtonClassicStyle> = {
    dimensions: {
      width: '100%',
      height: '26px',
    },
  };

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

  protected onNavigationItemClick(item: TreeviewNode, event: Event): void {
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

  private updateDocumentTitle(): void {
    let route = this.router.routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const title = route?.snapshot?.data['title'] ?? 'Home';
    this.titleService.setTitle(`MV Lib - ${title}`);
  }
}
