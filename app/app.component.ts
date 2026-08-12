import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import {
  MvLibButtonClassicComponent,
  MvLibButtonClassicEffects,
  MvLibButtonClassicStyle,
  MvLibThemeDefinition,
  MvLibThemeService,
  MvLibToastClassicComponent,
  MvLibTreeviewClassicComponent,
  MvLibTreeviewDirectives,
} from 'mv-lib';

interface TreeviewNode {
  label: string;
  icon?: string;
  routerLink?: string;
  themeName?: string;
  wip?: boolean;
  children?: TreeviewNode[];
}

@Component({
  selector: 'app-root',
  imports: [
    MvLibTreeviewClassicComponent,
    MvLibTreeviewDirectives,
    MvLibButtonClassicComponent,
    MvLibToastClassicComponent,
    RouterOutlet,
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

  constructor() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.updateDocumentTitle());

    this.updateDocumentTitle();
  }

  protected themeTreeviewItems = computed<TreeviewNode[]>(() =>
    this.themeService.getThemes().map((theme: MvLibThemeDefinition) => ({
      label: theme.name,
      icon: theme.mode === 'light' ? 'light_mode' : 'dark_mode',
      themeName: theme.name,
    })),
  );

  protected componentTreeviewItems = signal<TreeviewNode[]>([
    {
      label: 'Buttons',
      icon: 'trackpad_input',
      children: [
        { label: 'Classic', routerLink: '/button-classic-example' },
      ],
    },
    {
      label: 'Dropdowns',
      icon: 'dropdown_menu',
      children: [
        { label: 'Classic', routerLink: '/dropdown-classic-example' },
      ],
    },
    {
      label: 'Radio buttons',
      icon: 'radio_button_checked',
      children: [
        { label: 'Classic', routerLink: '/radio-buttons-classic-example' },
      ],
    },
    {
      label: 'Switches',
      icon: 'switches',
      children: [
        { label: 'Classic', routerLink: '/switch-classic-example' },
        // { label: 'Lite', routerLink: '/switch-lite-example', wip: true },
      ],
    },
    {
      label: 'Textboxes',
      icon: 'crop_16_9',
      children: [
        { label: 'Classic', routerLink: '/textbox-classic-example' },
      ],
    },
    {
      label: 'Treeview',
      icon: 'folder_data',
      children: [
        { label: 'Classic', routerLink: '/treeview-classic-example', wip: true },
      ],
    },
  ]);

  protected serviceTreeviewItems = signal<TreeviewNode[]>([
    {
      label: 'Toasts',
      icon: 'notifications',
      children: [
        { label: 'Classic', routerLink: '/toast-classic-example' },
      ],
    },
  ]);

  protected treeviewButtonEffects: Partial<MvLibButtonClassicEffects> = {
    classes: [
      'mv-lib-tint-hover',
      'mv-lib-push-click',
    ],
  };

  protected treeviewButtonStyle: Partial<MvLibButtonClassicStyle> = {
    dimensions: {
      width: '100%',
      height: '26px',
    },
  };

  protected onThemeSelect(themeName?: string, event?: Event): void {
    event?.stopPropagation();
    if (!themeName) {
      return;
    }
    this.themeService.setTheme(themeName);
  }

  protected onNavigationItemClick(item: TreeviewNode, event: Event): void {
    event.stopPropagation();
    if (!item.routerLink) {
      return;
    }
    this.router.navigateByUrl(item.routerLink);
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
