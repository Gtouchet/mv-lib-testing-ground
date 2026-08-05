import { ChangeDetectionStrategy, Component, signal, viewChild } from "@angular/core";
import { MvLibDropdownClassicAnimations, MvLibDropdownClassicComponent, MvLibDropdownClassicEffects, MvLibDropdownClassicSettings, MvLibDropdownClassicStyle, MvLibDropdownDirectives } from "mv-lib";
import { BaseExampleComponent } from '../../base-example.component';
import { INPUTS } from "../../../inputs/_inputs.export";
import { JsonPipe } from "@angular/common";

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
  styleUrl: '../../example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DropdownClassicExampleComponent extends BaseExampleComponent {

  protected dropdown = viewChild.required<MvLibDropdownClassicComponent<User>>('mvLibDropdownClassic');

  protected style = signal<Partial<MvLibDropdownClassicStyle>>({
    button: {
      backgroundColor: this.appStyles.var('dropdown-classic-button-background-color'),
      dimensions: {
        width: '150px',
        height: '40px',
      },
      font: {
        color: this.appStyles.var('dropdown-classic-button-text-color'),
      }
    },
    item: {
      backgroundColor: this.appStyles.var('dropdown-classic-item-background-color'),
      font: {
        color: this.appStyles.var('dropdown-classic-item-text-color'),
      },
    },
  });

  protected effects = signal<Partial<MvLibDropdownClassicEffects>>({
    parts: {
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
    },
  });

  protected animations = signal<Partial<MvLibDropdownClassicAnimations>>({

  });
  
  protected settings = signal<Partial<MvLibDropdownClassicSettings>>({
    closeOnItemSelect: true,
    closeOnOutsideClick: true,
    resetButton: true,
    filterBy: 'name',
  });

  protected opened = signal(false);

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
  
  ngAfterViewInit() {
    this.selectedPartStyle.set('button');
    this.selectedPartEffects.set('button');
    this.logProperties = [
      { property: 'style', value: this.dropdown().computedStyles },
      { property: 'effects', value: this.dropdown().computedEffects },
      { property: 'settings', value: this.dropdown().computedSettings },
      { property: 'opened', value: this.opened },
      { property: 'disabled', value: this.disabled },
    ];
    this.refreshLog();
  }
}