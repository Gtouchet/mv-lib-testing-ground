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
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'A dude with a long name' },
  ]);

  protected onSelect(e: MvLibDropdownClassicClickEvent) {
    console.log('Selected item:', e.selectedItem);
  }
}