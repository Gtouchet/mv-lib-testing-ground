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
import { INPUTS } from "../../../shared/inputs.export";

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
    INPUTS,
    JsonPipe,
  ],
  templateUrl: './dropdown-classic-example.component.html',
  styleUrls: [
    './dropdown-classic-example.component.scss',
    '../../testing-ground.scss'
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
    { id: 1, icon: 'person', name: 'Alice' },
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
      buttonWidthPx: 150,
      buttonHeightPx: 40,
      buttonBackgroundColor: this.appStyles.var('dropdown-classic-button-background-color'),
      buttonTextColor: this.appStyles.var('dropdown-classic-button-text-color'),

      listMaxHeightPx: 150,
      
      itemHeightPx: 25,
      itemBackgroundColor: this.appStyles.var('dropdown-classic-item-background-color'),
      itemTextColor: this.appStyles.var('dropdown-classic-item-text-color'),
    });
    this.effects = signal<Partial<MvLibDropdownClassicEffects>>({
      buttonIdle: ['shadow'],
      buttonHover: ['darken'],
      buttonClick: ['ripple'],
      listIdle: ['shadow'],
      itemHover: ['darken'],
      itemClick: [],
    });
    this.settings = signal<Partial<MvLibDropdownClassicSettings>>({
      closeOnItemSelect: true,
      closeOnOutsideClick: true,
      resetButton: true,
    });
  }

  protected initForm() {
    
  }
}