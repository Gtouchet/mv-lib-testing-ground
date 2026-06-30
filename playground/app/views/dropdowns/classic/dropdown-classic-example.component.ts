import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { MvLibDropdownClassicSelectEvent, MvLibDropdownClassicComponent, MvLibDropdownClassicEffects, MvLibDropdownClassicSettings, MvLibDropdownItemTemplateDirective, MvLibDropdownSelectedTemplateDirective } from "mv-lib";
import { BaseExampleComponent } from "../../base-example.component";
import { JsonPipe } from "@angular/common";

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dropdown-classic-example',
  imports: [
    MvLibDropdownClassicComponent,
    MvLibDropdownSelectedTemplateDirective,
    MvLibDropdownItemTemplateDirective,
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
  MvLibDropdownClassicSettings,
  MvLibDropdownClassicEffects
> {

  protected opened = signal(false);

  protected selectedItem = signal<User | undefined>(undefined);
  protected items = signal<User[]>([
    { id: 1, name: 'Person with a long name' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eve' },
    { id: 6, name: 'Frank' },
    { id: 7, name: 'Grace' },
    { id: 8, name: 'Hannah' },
    { id: 9, name: 'Ivy' },
  ]);

  constructor() {
    super();
    this.logProperties.set(['disabled', 'opened', 'settings', 'effects']);
    this.settings = signal<Partial<MvLibDropdownClassicSettings>>({
      widthPx: 150,
      buttonHeightPx: 40,
      itemHeightPx: 25,
      listMaxHeightPx: 150,
      buttonColor: 'lightgray',
      buttonTextColor: 'black',
      listColor: 'lightgray',
      listTextColor: 'black',
      placeholder: 'Select a user',
      closeOnSelect: true,
      closeOnOutsideClick: true,
    });
    this.effects = signal<Partial<MvLibDropdownClassicEffects>>({
      idle: ['shadow'],
      buttonHover: ['darken'],
      itemHover: ['darken'],
      buttonClick: ['push'],
    });
  }
}