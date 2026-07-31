import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { MvLibDropdownClassicComponent, MvLibDropdownDirectives } from "mv-lib";
import { BaseExampleComponent } from '../../base-example.component';
import { JsonPipe } from "@angular/common";
import { INPUTS } from "../../../inputs/_inputs.export";

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
    INPUTS,
  ],
  templateUrl: './dropdown-classic-example.component.html',
  styleUrl: '../../example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DropdownClassicExampleComponent extends BaseExampleComponent<MvLibDropdownClassicComponent<User>> {

  protected selectedItem = signal<User | undefined>(undefined);
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
    this.logProperties.set(['styles', 'effects', 'settings', 'active', 'opened', 'disabled']);
    this.styles = signal({
      buttonWidthPx: 150,
      buttonHeightPx: 40,
      buttonBackgroundColor: this.appStyles.var('dropdown-classic-button-background-color'),
      buttonTextColor: this.appStyles.var('dropdown-classic-button-text-color'),

      listMaxHeightPx: 150,
      
      itemHeightPx: 25,
      itemBackgroundColor: this.appStyles.var('dropdown-classic-item-background-color'),
      itemTextColor: this.appStyles.var('dropdown-classic-item-text-color'),
    });
    this.effects = signal({

    });
    this.settings = signal({
      closeOnItemSelect: true,
      closeOnOutsideClick: true,
      resetButton: true,
      filterBy: 'name',
    });
  }
}