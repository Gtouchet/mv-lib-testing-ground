import { ChangeDetectionStrategy, Component, model, signal, viewChild } from "@angular/core";
import { MvLibDropdownClassicAnimations, MvLibDropdownClassicComponent, MvLibDropdownClassicEffects, MvLibDropdownClassicSettings, MvLibDropdownClassicStyle, MvLibDropdownDirectives } from "mv-lib";
import { BaseExampleComponent } from '../../base-example.component';
import { INPUTS } from "../../../inputs/_inputs.export";
import { CommonModule, JsonPipe } from "@angular/common";

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
    CommonModule,
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
      dimensions: {
        width: '200px',
        height: '40px',
      },
    },
    list: {
      dimensions: {
        maxHeight: '150px',
      },
    },
  });

  protected effects = signal<Partial<MvLibDropdownClassicEffects>>({
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
  });

  protected animations = signal<Partial<MvLibDropdownClassicAnimations>>({

  });
  
  protected settings = signal<Partial<MvLibDropdownClassicSettings>>({
    button: {
      resetButton: true,
    },
    list: {
      filterBy: 'name',
    },
  });

  protected opened = model(false);

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
    this.selectedPartSettings.set('button');
    this.logProperties = [
      { property: 'inputStyle', value: () => this.dropdown().getStyle() },
      { property: 'inputEffects', value: () => this.dropdown().getEffects() },
      { property: 'inputSettings', value: () => this.dropdown().getSettings() },
      { property: 'opened', value: this.opened },
      { property: 'disabled', value: this.disabled },
    ];
    this.refreshLog();
  }
}