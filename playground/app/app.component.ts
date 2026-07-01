import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {
  MvLibButtonClassicComponent,
  MvLibDropdownClassicComponent,
  MvLibDropdownClassicEffects,
  MvLibDropdownClassicStyles,
  MvLibDropdownDirectives,
} from 'mv-lib';
import { StylesService } from '../styles/styles.service';

interface Item {
  name: string;
  routerLink?: string;
}

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MvLibButtonClassicComponent,
    MvLibDropdownClassicComponent,
    MvLibDropdownDirectives,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class AppComponent {
  
  protected router = inject(Router);
  protected appStyles = inject(StylesService);

  protected selectedButtonItem = signal<Item | undefined>(undefined);
  protected selectedSwitchItem = signal<Item | undefined>(undefined);
  protected selectedDropdownItem = signal<Item | undefined>(undefined);

  protected buttonItems: Item[] = [
    { name: 'Classic', routerLink: '/button-classic-example' },
  ];
  protected dropdownItems: Item[] = [
    { name: 'Classic', routerLink: '/dropdown-classic-example' },
  ];
  protected switchItems: Item[] = [
    { name: 'Classic', routerLink: '/switch-classic-example' },
    { name: 'Lite', routerLink: '/switch-lite-example' },
  ];


  protected dropdownStyles: Partial<MvLibDropdownClassicStyles> = {
    buttonHeightPx: 32,
    itemHeightPx: 32,
    listMaxHeightPx: 150,
    buttonColor: this.appStyles.var('component-primary'),
    itemColor: '#68b3ff',
    itemTextColor: 'white',
  };
  protected buttonDropdownStyles: Partial<MvLibDropdownClassicStyles> = {
    ...this.dropdownStyles,
    widthPx: 175,
  };
  protected menuDropdownStyles: Partial<MvLibDropdownClassicStyles> = {
    ...this.dropdownStyles,
    widthPx: 175,
  };
  protected switchDropdownStyles: Partial<MvLibDropdownClassicStyles> = {
    ...this.dropdownStyles,
    widthPx: 175,
  };
  protected dropdownEffects: Partial<MvLibDropdownClassicEffects> = {
    idle: ['shadow'],
    buttonHover: ['darken'],
    itemHover: ['darken'],
  };

  protected onButtonSelect(item: Item): void {
    this.selectedButtonItem.set(item);
    this.selectedSwitchItem.set(undefined);
    this.selectedDropdownItem.set(undefined);
    if (item.routerLink) {
      this.router.navigateByUrl(item.routerLink);
    }
  }

  protected onSwitchSelect(item: Item): void {
    this.selectedSwitchItem.set(item);
    this.selectedButtonItem.set(undefined);
    this.selectedDropdownItem.set(undefined);
    if (item.routerLink) {
      this.router.navigateByUrl(item.routerLink);
    }
  }

  protected onDropdownSelect(item: Item): void {
    this.selectedDropdownItem.set(item);
    this.selectedButtonItem.set(undefined);
    this.selectedSwitchItem.set(undefined);
    if (item.routerLink) {
      this.router.navigateByUrl(item.routerLink);
    }
  }
}
