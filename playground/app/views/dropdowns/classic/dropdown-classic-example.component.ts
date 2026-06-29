import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { MvLibDropdownClassicClickEvent, MvLibDropdownClassicComponent, MvLibDropdownItemTemplateDirective, MvLibDropdownSelectedTemplateDirective } from "mv-lib";

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
  ],
  templateUrl: './dropdown-classic-example.component.html',
  styleUrl: './dropdown-classic-example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DropdownClassicExampleComponent {

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

  protected onSelect(e: MvLibDropdownClassicClickEvent) {
    console.log('Selected item:', e.selectedItem);
  }
}