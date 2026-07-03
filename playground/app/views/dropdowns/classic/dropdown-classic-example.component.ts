import { ChangeDetectionStrategy, Component, inject, signal } from "@angular/core";
import {
  MvLibDropdownClassicComponent,
  MvLibDropdownClassicEffects,
  MvLibDropdownClassicSettings,
  MvLibDropdownClassicStyles,
  MvLibDropdownDirectives,
} from "mv-lib";
import { BaseExampleComponent } from "../../base-example.component";
import { JsonPipe } from "@angular/common";
import { StylesService } from "../../../../styles/styles.service";

interface User {
  id: number;
  icon: string;
  name: string;
}

@Component({
  selector: 'app-dropdown-classic-example',
  imports: [
    MvLibDropdownClassicComponent,
    MvLibDropdownDirectives,
    JsonPipe,
  ],
  templateUrl: './dropdown-classic-example.component.html',
  styleUrls: [
    './dropdown-classic-example.component.scss',
    '../../playground.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DropdownClassicExampleComponent extends BaseExampleComponent<
  MvLibDropdownClassicStyles,
  MvLibDropdownClassicEffects,
  MvLibDropdownClassicSettings
> {
  protected appStyles = inject(StylesService);
  
  protected opened = signal(false);
  protected selectedUser = signal<User | undefined>(undefined);
  protected items = signal<User[]>([
    { id: 1, icon: 'person', name: 'Alice', },
    { id: 2, icon: 'person', name: 'Bob' },
    { id: 3, icon: 'person', name: 'Charlie' },
    { id: 4, icon: 'person', name: 'David' },
    { id: 5, icon: 'person', name: 'Eve' },
    { id: 6, icon: 'person', name: 'Frank' },
    { id: 7, icon: 'person', name: 'Grace' },
    { id: 8, icon: 'person', name: 'Henry' },
    { id: 9, icon: 'person', name: 'Ivy' },
  ]);

  constructor() {
    super();
    this.logProperties.set(['disabled', 'opened', 'styles', 'effects', 'settings']);
    this.styles = signal<Partial<MvLibDropdownClassicStyles>>({
      widthPx: 150,
      buttonHeightPx: 40,
      itemHeightPx: 25,
      listMaxHeightPx: 150,
      buttonColor: this.appStyles.var('component-primary'),
      buttonTextColor: 'white',
      itemColor: '#68b3ff',
      itemTextColor: 'white',
    });
    this.effects = signal<Partial<MvLibDropdownClassicEffects>>({
      idle: ['shadow'],
      buttonHover: ['darken'],
      itemHover: ['darken'],
    });
    this.settings = signal<Partial<MvLibDropdownClassicSettings>>({
      closeOnSelect: true,
      closeOnOutsideClick: true,
      resetButton: true,
    });
  }
}