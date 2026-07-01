import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {
  MvLibButtonClassicComponent,
  MvLibDropdownClassicComponent,
  MvLibDropdownClassicStyles,
  MvLibDropdownDirectives,
} from 'mv-lib';
import { StylesService } from '../styles/styles.service';

interface Item {
  selectedName: string;
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
  protected styles = inject(StylesService);

  protected selectedButtonItem = signal<Item | undefined>(undefined);
  protected selectedSwitchItem = signal<Item | undefined>(undefined);
  protected selectedDropdownItem = signal<Item | undefined>(undefined);

  protected buttonItems: Item[] = [
    { selectedName: 'Button classic', name: 'Classic', routerLink: '/button-classic-example' },
  ];
  protected switchItems: Item[] = [
    { selectedName: 'Switch classic', name: 'Classic', routerLink: '/switch-classic-example' },
  ];
  protected dropdownItems: Item[] = [
    { selectedName: 'Dropdown classic', name: 'Classic', routerLink: '/dropdown-classic-example' },
  ];

  protected dropdownStyles: Partial<MvLibDropdownClassicStyles> = {
    buttonHeightPx: 32,
    itemHeightPx: 32,
    listMaxHeightPx: 150,
    buttonColor: this.styles.var('component-primary'),
    itemColor: '#68b3ff',
    itemTextColor: 'white',
  };
  protected buttonDropdownStyles: Partial<MvLibDropdownClassicStyles> = {
    ...this.dropdownStyles,
    widthPx: 175,
  };
  protected switchDropdownStyles: Partial<MvLibDropdownClassicStyles> = {
    ...this.dropdownStyles,
    widthPx: 175,
  };
  protected menuDropdownStyles: Partial<MvLibDropdownClassicStyles> = {
    ...this.dropdownStyles,
    widthPx: 175,
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
