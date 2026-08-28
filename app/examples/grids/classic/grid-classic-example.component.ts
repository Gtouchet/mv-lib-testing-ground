import { ChangeDetectionStrategy, Component, signal, viewChild } from "@angular/core";
import { INPUTS } from "../../../inputs/_inputs.export";
import { CommonModule } from "@angular/common";
import { BaseExampleComponent } from "../../base-example.component";
import { MvLibGridClassicColumnComponent, MvLibGridClassicComponent, MvLibGridClassicEffects, MvLibGridClassicSettings, MvLibGridClassicStyle, MvLibGridDirectives } from "mv-lib";

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dropdown-classic-example',
  imports: [
    MvLibGridClassicComponent,
    MvLibGridClassicColumnComponent,
    MvLibGridDirectives,
    INPUTS,
    CommonModule,
  ],
  templateUrl: './grid-classic-example.component.html',
  styleUrl: '../../example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class GridClassicExampleComponent extends BaseExampleComponent {

  protected grid = viewChild.required<MvLibGridClassicComponent<User>>('mvLibGridClassic');


  protected style = signal<Partial<MvLibGridClassicStyle>>({
      
  });

  protected effects = signal<Partial<MvLibGridClassicEffects>>({
      
  });
  
  protected settings = signal<Partial<MvLibGridClassicSettings>>({
      
  });

  protected items = signal<User[]>([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eve' },
    { id: 6, name: 'Frank' },
    { id: 7, name: 'Grace' },
    { id: 8, name: 'Henry' },
    { id: 9, name: 'Ivy' },
  ]);

  protected readonly getCellBackgroundColor = (item: User): string => item.id % 2 === 0 ? 'lightblue' : 'lightgreen';
}