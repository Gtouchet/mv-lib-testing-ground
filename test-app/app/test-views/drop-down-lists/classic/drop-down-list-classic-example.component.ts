import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { MvLibDropDownListClassicClickEvent, MvLibDropDownListClassicComponent, MvLibDropDownListTemplateDirective } from "mv-lib";

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-drop-down-list-classic-example',
  imports: [
    MvLibDropDownListClassicComponent,
    MvLibDropDownListTemplateDirective,
  ],
  templateUrl: './drop-down-list-classic-example.component.html',
  styleUrl: './drop-down-list-classic-example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DropDownListClassicExampleComponent {

  protected data = signal<User[]>([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ]);

  protected onSelect(e: MvLibDropDownListClassicClickEvent) {
    console.log('Selected item:', e.selectedItem);
  }
}